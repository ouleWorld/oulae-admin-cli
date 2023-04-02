"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@umijs/max/test");
exports.default = async () => {
    const config = await (0, test_1.configUmiAlias)(Object.assign({}, (0, test_1.createConfig)({
        target: 'browser',
    })));
    console.log();
    return Object.assign(Object.assign({}, config), { testEnvironmentOptions: Object.assign(Object.assign({}, ((config === null || config === void 0 ? void 0 : config.testEnvironmentOptions) || {})), { url: 'http://localhost:8000' }), setupFiles: [...(config.setupFiles || []), './tests/setupTests.jsx'], globals: Object.assign(Object.assign({}, config.globals), { localStorage: null }) });
};
