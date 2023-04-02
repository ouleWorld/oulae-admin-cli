"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pro_components_1 = require("@ant-design/pro-components");
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const react_1 = require("react");
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard = ({ title, href, index, desc }) => {
    const { useToken } = antd_1.theme;
    const { token } = useToken();
    return (<div style={{
            backgroundColor: token.colorBgContainer,
            boxShadow: token.boxShadow,
            borderRadius: '8px',
            fontSize: '14px',
            color: token.colorTextSecondary,
            lineHeight: '22px',
            padding: '16px 19px',
            minWidth: '220px',
            flex: 1,
        }}>
      <div style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
        }}>
        <div style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage: "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
        }}>
          {index}
        </div>
        <div style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
        }}>
          {title}
        </div>
      </div>
      <div style={{
            fontSize: '14px',
            color: token.colorTextSecondary,
            textAlign: 'justify',
            lineHeight: '22px',
            marginBottom: 8,
        }}>
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>);
};
const Welcome = () => {
    var _a;
    const { token } = antd_1.theme.useToken();
    const { initialState } = (0, max_1.useModel)('@@initialState');
    return (<pro_components_1.PageContainer>
      <antd_1.Card style={{
            borderRadius: 8,
        }} bodyStyle={{
            backgroundImage: ((_a = initialState === null || initialState === void 0 ? void 0 : initialState.settings) === null || _a === void 0 ? void 0 : _a.navTheme) === 'realDark'
                ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
                : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}>
        <div style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage: "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
        }}>
          <div style={{
            fontSize: '20px',
            color: token.colorTextHeading,
        }}>
            欢迎使用 Ant Design Pro
          </div>
          <p style={{
            fontSize: '14px',
            color: token.colorTextSecondary,
            lineHeight: '22px',
            marginTop: 16,
            marginBottom: 32,
            width: '65%',
        }}>
            Ant Design Pro 是一个整合了 umi，Ant Design 和 ProComponents
            的脚手架方案。致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
        }}>
            <InfoCard index={1} href="https://umijs.org/docs/introduce/introduce" title="了解 umi" desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"/>
            <InfoCard index={2} title="了解 ant design" href="https://ant.design" desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"/>
            <InfoCard index={3} title="了解 Pro Components" href="https://procomponents.ant.design" desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"/>
          </div>
        </div>
      </antd_1.Card>
    </pro_components_1.PageContainer>);
};
exports.default = Welcome;
