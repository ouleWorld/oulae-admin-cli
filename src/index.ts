// 路径处理库
import * as globby from 'globby';
// 完整的 node.js 命令行解决方案
import * as commander from 'commander';
import * as path from 'path';
import { error, chalk, fs, info } from './lib';
// 这个库从npm注册中心获取软件包清单和tarballs
import * as pacote from 'pacote';
const { program } = commander;

let commandsPath = []; // cli 命令定义路径 list
let pkgVersion = ''; // cli 版本号
let pkgName = ''; // cli name

// 获取src/command路径下的命令
const getCommand = () => {
  commandsPath =
    (globby as any).sync('./commands/*.*s', { cwd: __dirname, deep: 1 }) || [];
  return commandsPath;
};

// 获取当前包的信息
const getPkgInfo = () => {
  // 如果要在 node 服务器获取相关的配置信息，我们可以这样做，这个在做服务端渲染的时候经常这样做
  const jsonPath = path.join(__dirname, '../package.json');
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
  const jsonResult = JSON.parse(jsonContent);
  pkgVersion = jsonResult.version;
  pkgName = jsonResult.name;
};

// 获取最新包最新版本
const getLatestVersion = async () => {
  const manifest = await pacote.manifest(`${pkgName}@latest`);
  return manifest.version;
};

function start() {
  /**
   * 1. 完成指令的注册
   * 2. s
   * 3. 使用 program.parseAsync(process.argv) 解析用户当前输入的指令
   *
   */
  // 1. 获取指令文件的路径
  const commandsPath = getCommand();

  commandsPath.forEach((commandPath) => {
    // 写法 1
    // const commandObj = require(`./${commandPath}`);
    // 写法 2
    const cpurl = path.join(__dirname, commandPath);

    // 感觉写法 2 要更好一点吧，不过无伤大雅
    const commandObj = require(cpurl);
    /**
     * command: 具体命令
     * description: 命令的描述信息
     * optionList: 命令的配置信息
     * action: 命令具体执行的函数
     */
    const { command, description, optionList, action } = commandObj.default;
    // commander 注册
    const curp = program
      .command(command)
      .description(description)
      .action(action);

    // 这个应该是配置信息的注册
    optionList &&
      optionList.map((option: [string]) => {
        curp.option(...option);
      });
  });

  // 这里使用了全局变量去承接
  getPkgInfo();
  // 设置 cli 的版本号
  program.version(pkgVersion);

  // 这里是处理非定义命令的情况
  program.on('command:*', async ([cmd]) => {
    program.outputHelp();
    // 打印错误信息
    error(`未知命令 command ${chalk.yellow(cmd)}.`);
    const latestVersion = await getLatestVersion();
    if (latestVersion !== pkgVersion) {
      info(
        `可更新版本，${chalk.green(pkgVersion)} -> ${chalk.green(
          latestVersion
        )} \n执行npm install -g ${pkgName}`
      );
    }

    // https://nodejs.cn/api-v16/process/process_exit_code.html
    // 告知 node 进程退出的退出码
    process.exitCode = 1;
  });

  // 解析当前用户输入的指令
  program.parseAsync(process.argv);
}

start();
