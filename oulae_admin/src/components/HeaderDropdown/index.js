"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const react_1 = require("react");
const use_emotion_css_1 = require("@ant-design/use-emotion-css");
const classnames_1 = require("classnames");
const HeaderDropdown = (_a) => {
    var { overlayClassName: cls } = _a, restProps = __rest(_a, ["overlayClassName"]);
    const className = (0, use_emotion_css_1.useEmotionCss)(({ token }) => {
        return {
            [`@media screen and (max-width: ${token.screenXS})`]: {
                width: '100%',
            },
        };
    });
    return <antd_1.Dropdown overlayClassName={(0, classnames_1.default)(className, cls)} {...restProps}/>;
};
exports.default = HeaderDropdown;
