"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = exports.SelectLang = void 0;
const icons_1 = require("@ant-design/icons");
const max_1 = require("@umijs/max");
const react_1 = require("react");
const SelectLang = () => {
    return (<max_1.SelectLang style={{
            padding: 4,
        }}/>);
};
exports.SelectLang = SelectLang;
const Question = () => {
    return (<div style={{
            display: 'flex',
            height: 26,
        }} onClick={() => {
            window.open('https://pro.ant.design/docs/getting-started');
        }}>
      <icons_1.QuestionCircleOutlined />
    </div>);
};
exports.Question = Question;
