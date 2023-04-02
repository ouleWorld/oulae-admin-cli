"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./pt-BR/component");
const globalHeader_1 = require("./pt-BR/globalHeader");
const menu_1 = require("./pt-BR/menu");
const pages_1 = require("./pt-BR/pages");
const pwa_1 = require("./pt-BR/pwa");
const settingDrawer_1 = require("./pt-BR/settingDrawer");
const settings_1 = require("./pt-BR/settings");
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'navBar.lang': 'Idiomas', 'layout.user.link.help': 'ajuda', 'layout.user.link.privacy': 'política de privacidade', 'layout.user.link.terms': 'termos de serviços', 'app.preview.down.block': 'Download this page to your local project' }, globalHeader_1.default), menu_1.default), settingDrawer_1.default), settings_1.default), pwa_1.default), component_1.default), pages_1.default);
