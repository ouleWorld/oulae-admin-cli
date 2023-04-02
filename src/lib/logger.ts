// 集中定义 log 输出形式

// 这个库允许你给输出信息加上颜色内容
import * as chalk from 'chalk';

export const warn = (text: string) => {
  console.log(chalk.yellow(`\n${text}\n`));
};

export const info = (text: string) => {
  console.log(chalk.cyan(`\n${text}\n`));
};

export const error = (text: string) => {
  console.log(chalk.bgRed(`\n${text}\n`));
};
