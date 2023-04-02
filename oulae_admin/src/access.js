"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
function access(initialState) {
    const { currentUser } = initialState !== null && initialState !== void 0 ? initialState : {};
    return {
        canAdmin: currentUser && currentUser.access === 'admin',
    };
}
exports.default = access;
