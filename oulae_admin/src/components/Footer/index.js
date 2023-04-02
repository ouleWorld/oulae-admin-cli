"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const max_1 = require("@umijs/max");
const react_1 = require("react");
const Footer = () => {
    const intl = (0, max_1.useIntl)();
    const defaultMessage = intl.formatMessage({
        id: 'app.copyright.produced',
        defaultMessage: '蚂蚁集团体验技术部出品',
    });
    const currentYear = new Date().getFullYear();
    return (<pro_components_1.DefaultFooter style={{
            background: 'none',
        }} copyright={`${currentYear} ${defaultMessage}`} links={[
            {
                key: 'Ant Design Pro',
                title: 'Ant Design Pro',
                href: 'https://pro.ant.design',
                blankTarget: true,
            },
            {
                key: 'github',
                title: <icons_1.GithubOutlined />,
                href: 'https://github.com/ant-design/ant-design-pro',
                blankTarget: true,
            },
            {
                key: 'Ant Design',
                title: 'Ant Design',
                href: 'https://ant.design',
                blankTarget: true,
            },
        ]}/>);
};
exports.default = Footer;
