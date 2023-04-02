"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const react_1 = require("react");
const NoFoundPage = () => (<antd_1.Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<antd_1.Button type="primary" onClick={() => max_1.history.push('/')}>
        Back Home
      </antd_1.Button>}/>);
exports.default = NoFoundPage;
