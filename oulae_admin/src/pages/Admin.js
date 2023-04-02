"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const react_1 = require("react");
const Admin = () => {
    const intl = (0, max_1.useIntl)();
    return (<pro_components_1.PageContainer content={intl.formatMessage({
            id: 'pages.admin.subPage.title',
            defaultMessage: 'This page can only be viewed by admin',
        })}>
      <antd_1.Card>
        <antd_1.Alert message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
        })} type="success" showIcon banner style={{
            margin: -12,
            marginBottom: 48,
        }}/>
        <antd_1.Typography.Title level={2} style={{ textAlign: 'center' }}>
          <icons_1.SmileTwoTone /> Ant Design Pro <icons_1.HeartTwoTone twoToneColor="#eb2f96"/> You
        </antd_1.Typography.Title>
      </antd_1.Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </pro_components_1.PageContainer>);
};
exports.default = Admin;
