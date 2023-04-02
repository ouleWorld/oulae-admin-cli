"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./zh-TW/component");
const globalHeader_1 = require("./zh-TW/globalHeader");
const menu_1 = require("./zh-TW/menu");
const pwa_1 = require("./zh-TW/pwa");
const settingDrawer_1 = require("./zh-TW/settingDrawer");
const settings_1 = require("./zh-TW/settings");
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'navBar.lang': '語言', 'layout.user.link.help': '幫助', 'layout.user.link.privacy': '隱私', 'layout.user.link.terms': '條款', 'app.preview.down.block': '下載此頁面到本地項目' }, globalHeader_1.default), menu_1.default), settingDrawer_1.default), settings_1.default), pwa_1.default), component_1.default);
