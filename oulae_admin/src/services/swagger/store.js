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
exports.deleteOrder = exports.getOrderById = exports.placeOrder = exports.getInventory = void 0;
// @ts-ignore
/* eslint-disable */
const max_1 = require("@umijs/max");
/** Returns pet inventories by status Returns a map of status codes to quantities GET /store/inventory */
async function getInventory(options) {
    return (0, max_1.request)('/store/inventory', Object.assign({ method: 'GET' }, (options || {})));
}
exports.getInventory = getInventory;
/** Place an order for a pet POST /store/order */
async function placeOrder(body, options) {
    return (0, max_1.request)('/store/order', Object.assign({ method: 'POST', data: body }, (options || {})));
}
exports.placeOrder = placeOrder;
/** Find purchase order by ID For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions GET /store/order/${param0} */
async function getOrderById(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { orderId: param0 } = params, queryParams = __rest(params, ["orderId"]);
    return (0, max_1.request)(`/store/order/${param0}`, Object.assign({ method: 'GET', params: Object.assign({}, queryParams) }, (options || {})));
}
exports.getOrderById = getOrderById;
/** Delete purchase order by ID For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors DELETE /store/order/${param0} */
async function deleteOrder(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { orderId: param0 } = params, queryParams = __rest(params, ["orderId"]);
    return (0, max_1.request)(`/store/order/${param0}`, Object.assign({ method: 'DELETE', params: Object.assign({}, queryParams) }, (options || {})));
}
exports.deleteOrder = deleteOrder;
