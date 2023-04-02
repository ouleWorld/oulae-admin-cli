"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFakeCaptcha = void 0;
// @ts-ignore
/* eslint-disable */
const max_1 = require("@umijs/max");
/** 发送验证码 POST /api/login/captcha */
async function getFakeCaptcha(params, options) {
    return (0, max_1.request)('/api/login/captcha', Object.assign({ method: 'GET', params: Object.assign({}, params) }, (options || {})));
}
exports.getFakeCaptcha = getFakeCaptcha;
