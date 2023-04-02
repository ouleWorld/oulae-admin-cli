"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pro_components_1 = require("@ant-design/pro-components");
const antd_1 = require("antd");
const react_1 = require("react");
const umi_1 = require("umi");
const api_1 = require("@/services/ant-design-pro/api");
const Request = () => {
    const piRequest = () => {
        return (0, umi_1.request)('https://api.pi.delivery/v1/pi', {
            method: 'get',
            params: {
                start: 0,
                numberOfDigits: 3,
            },
        });
    };
    /**
     * [ahooks文档](https://ahooks.js.org/zh-CN/hooks/use-request/index)
     *
     * Q: 在 pro 中使用 useRequest 这个 api 为什么有时候会拿不到数据呢？(data&onSuccess)
     * A:
     * https://pro.ant.design/zh-CN/docs/request#%E5%8F%82%E8%80%83%E5%90%8E%E7%AB%AF%E6%8E%A5%E5%8F%A3%E8%A7%84%E8%8C%83%E5%BB%BA%E8%AE%AE
     * 接口的规范需要符合规范，要不然是可能拿不到数据的
     */
    const { loading, run } = (0, umi_1.useRequest)(api_1.currentUser, {
        manual: true,
        onSuccess: (result, params) => {
            console.log('result: ', result);
        },
    });
    const requestCallback = async () => {
        // https://api.pi.delivery/v1/pi?start=0&numberOfDigits=3
        // umi request 是基于 axios 的二次封装，使用方法可以直接参考 axios 文档
        /**
         * Q: request 的具体使用方法是什么？
         * A:
         * umi request 是基于 axios 的二次封装，使用方法可以直接参考 axios 文档
         * 文档：https://axios-http.com/zh/docs/req_config
         * 官方文档居然提供了中文版 👍🏻🐂
         */
        const res = await piRequest();
        console.log('res: ', res);
    };
    return (<pro_components_1.PageContainer>
      <antd_1.Card style={{
            borderRadius: 8,
        }}>
        <div>
          <antd_1.Button onClick={requestCallback}>request 请求</antd_1.Button>
        </div>

        <div>
          <antd_1.Button onClick={run}>useRequest 请求</antd_1.Button>
        </div>

        {loading ? <div>当前处于 loading 状态</div> : <div>here</div>}
      </antd_1.Card>
    </pro_components_1.PageContainer>);
};
exports.default = Request;
