"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRule = exports.addRule = exports.updateRule = exports.rule = exports.getNotices = exports.login = exports.outLogin = exports.currentUser = void 0;
// @ts-ignore
/* eslint-disable */
const max_1 = require("@umijs/max");
/** 获取当前的用户 GET /api/currentUser */
async function currentUser(options) {
    return (0, max_1.request)('/api/currentUser', Object.assign({ method: 'GET' }, (options || {})));
}
exports.currentUser = currentUser;
/** 退出登录接口 POST /api/login/outLogin */
async function outLogin(options) {
    return (0, max_1.request)('/api/login/outLogin', Object.assign({ method: 'POST' }, (options || {})));
}
exports.outLogin = outLogin;
/** 登录接口 POST /api/login/account */
async function login(body, options) {
    return (0, max_1.request)('/api/login/account', Object.assign({ method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, data: body }, (options || {})));
}
exports.login = login;
/** 此处后端没有提供注释 GET /api/notices */
async function getNotices(options) {
    return (0, max_1.request)('/api/notices', Object.assign({ method: 'GET' }, (options || {})));
}
exports.getNotices = getNotices;
/** 获取规则列表 GET /api/rule */
async function rule(params, options) {
    return (0, max_1.request)('/api/rule', Object.assign({ method: 'GET', params: Object.assign({}, params) }, (options || {})));
}
exports.rule = rule;
/** 新建规则 PUT /api/rule */
async function updateRule(options) {
    return (0, max_1.request)('/api/rule', Object.assign({ method: 'PUT' }, (options || {})));
}
exports.updateRule = updateRule;
/** 新建规则 POST /api/rule */
async function addRule(options) {
    return (0, max_1.request)('/api/rule', Object.assign({ method: 'POST' }, (options || {})));
}
exports.addRule = addRule;
/** 删除规则 DELETE /api/rule */
async function removeRule(options) {
    return (0, max_1.request)('/api/rule', Object.assign({ method: 'DELETE' }, (options || {})));
}
exports.removeRule = removeRule;
