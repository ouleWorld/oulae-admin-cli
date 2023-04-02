"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.layout = exports.getInitialState = void 0;
const Footer_1 = require("@/components/Footer");
const RightContent_1 = require("@/components/RightContent");
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const max_1 = require("@umijs/max");
const defaultSettings_1 = require("../config/defaultSettings");
const AvatarDropdown_1 = require("./components/RightContent/AvatarDropdown");
const requestErrorConfig_1 = require("./requestErrorConfig");
const api_1 = require("./services/ant-design-pro/api");
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
async function getInitialState() {
    const fetchUserInfo = async () => {
        try {
            const msg = await (0, api_1.currentUser)({
                skipErrorHandler: true,
            });
            return msg.data;
        }
        catch (error) {
            max_1.history.push(loginPath);
        }
        return undefined;
    };
    // 如果不是登录页面，执行
    const { location } = max_1.history;
    if (location.pathname !== loginPath) {
        let currentUser;
        // TODO: 为了方便本地开发所以加了一个这样的逻辑
        if (isDev) {
            currentUser = {
                name: 'Serati Ma',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                userid: '00000001',
                email: 'antdesign@alipay.com',
                signature: '海纳百川，有容乃大',
                title: '交互专家',
                group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
                tags: [
                    {
                        key: '0',
                        label: '很有想法的',
                    },
                    {
                        key: '1',
                        label: '专注设计',
                    },
                    {
                        key: '2',
                        label: '辣~',
                    },
                    {
                        key: '3',
                        label: '大长腿',
                    },
                    {
                        key: '4',
                        label: '川妹子',
                    },
                    {
                        key: '5',
                        label: '海纳百川',
                    },
                ],
                notifyCount: 12,
                unreadCount: 11,
                country: 'China',
                access: 'admin',
                geographic: {
                    province: {
                        label: '浙江省',
                        key: '330000',
                    },
                    city: {
                        label: '杭州市',
                        key: '330100',
                    },
                },
                address: '西湖区工专路 77 号',
                phone: '0752-268888888',
            };
        }
        else {
            currentUser = await fetchUserInfo();
        }
        return {
            fetchUserInfo,
            currentUser,
            settings: defaultSettings_1.default,
        };
    }
    return {
        fetchUserInfo,
        settings: defaultSettings_1.default,
    };
}
exports.getInitialState = getInitialState;
// ProLayout 支持的api https://procomponents.ant.design/components/layout
const layout = ({ initialState, setInitialState }) => {
    var _a, _b;
    return Object.assign({ actionsRender: () => [<RightContent_1.Question key="doc"/>, <RightContent_1.SelectLang key="SelectLang"/>], avatarProps: {
            src: (_a = initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) === null || _a === void 0 ? void 0 : _a.avatar,
            title: <AvatarDropdown_1.AvatarName />,
            render: (_, avatarChildren) => {
                return <AvatarDropdown_1.AvatarDropdown>{avatarChildren}</AvatarDropdown_1.AvatarDropdown>;
            },
        }, waterMarkProps: {
            content: (_b = initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) === null || _b === void 0 ? void 0 : _b.name,
        }, footerRender: () => <Footer_1.default />, onPageChange: () => {
            const { location } = max_1.history;
            // 如果没有登录，重定向到 login
            if (!(initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) && location.pathname !== loginPath) {
                max_1.history.push(loginPath);
            }
        }, layoutBgImgList: [
            {
                src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
                left: 85,
                bottom: 100,
                height: '303px',
            },
            {
                src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
                bottom: -68,
                right: -45,
                height: '303px',
            },
            {
                src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
                bottom: 0,
                left: 0,
                width: '331px',
            },
        ], links: isDev
            ? [
                <max_1.Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <icons_1.LinkOutlined />
            <span>OpenAPI 文档</span>
          </max_1.Link>,
            ]
            : [], menuHeaderRender: undefined, 
        // 自定义 403 页面
        // unAccessible: <div>unAccessible</div>,
        // 增加一个 loading 的状态
        childrenRender: (children) => {
            // if (initialState?.loading) return <PageLoading />;
            return (<>
          {children}
          <pro_components_1.SettingDrawer disableUrlParams enableDarkTheme settings={initialState === null || initialState === void 0 ? void 0 : initialState.settings} onSettingChange={(settings) => {
                    setInitialState((preInitialState) => (Object.assign(Object.assign({}, preInitialState), { settings })));
                }}/>
        </>);
        } }, initialState === null || initialState === void 0 ? void 0 : initialState.settings);
};
exports.layout = layout;
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
exports.request = Object.assign({}, requestErrorConfig_1.errorConfig);
function getAccess() {
    throw new Error('Function not implemented.');
}
