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
exports.logoutUser = exports.loginUser = exports.createUsersWithListInput = exports.createUsersWithArrayInput = exports.deleteUser = exports.updateUser = exports.getUserByName = exports.createUser = void 0;
// @ts-ignore
/* eslint-disable */
const max_1 = require("@umijs/max");
/** Create user This can only be done by the logged in user. POST /user */
async function createUser(body, options) {
    return (0, max_1.request)('/user', Object.assign({ method: 'POST', data: body }, (options || {})));
}
exports.createUser = createUser;
/** Get user by user name GET /user/${param0} */
async function getUserByName(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { username: param0 } = params, queryParams = __rest(params, ["username"]);
    return (0, max_1.request)(`/user/${param0}`, Object.assign({ method: 'GET', params: Object.assign({}, queryParams) }, (options || {})));
}
exports.getUserByName = getUserByName;
/** Updated user This can only be done by the logged in user. PUT /user/${param0} */
async function updateUser(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, body, options) {
    const { username: param0 } = params, queryParams = __rest(params, ["username"]);
    return (0, max_1.request)(`/user/${param0}`, Object.assign({ method: 'PUT', params: Object.assign({}, queryParams), data: body }, (options || {})));
}
exports.updateUser = updateUser;
/** Delete user This can only be done by the logged in user. DELETE /user/${param0} */
async function deleteUser(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { username: param0 } = params, queryParams = __rest(params, ["username"]);
    return (0, max_1.request)(`/user/${param0}`, Object.assign({ method: 'DELETE', params: Object.assign({}, queryParams) }, (options || {})));
}
exports.deleteUser = deleteUser;
/** Creates list of users with given input array POST /user/createWithArray */
async function createUsersWithArrayInput(body, options) {
    return (0, max_1.request)('/user/createWithArray', Object.assign({ method: 'POST', data: body }, (options || {})));
}
exports.createUsersWithArrayInput = createUsersWithArrayInput;
/** Creates list of users with given input array POST /user/createWithList */
async function createUsersWithListInput(body, options) {
    return (0, max_1.request)('/user/createWithList', Object.assign({ method: 'POST', data: body }, (options || {})));
}
exports.createUsersWithListInput = createUsersWithListInput;
/** Logs user into the system GET /user/login */
async function loginUser(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return (0, max_1.request)('/user/login', Object.assign({ method: 'GET', params: Object.assign({}, params) }, (options || {})));
}
exports.loginUser = loginUser;
/** Logs out current logged in user session GET /user/logout */
async function logoutUser(options) {
    return (0, max_1.request)('/user/logout', Object.assign({ method: 'GET' }, (options || {})));
}
exports.logoutUser = logoutUser;
