"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarDropdown = exports.AvatarName = void 0;
const api_1 = require("@/services/ant-design-pro/api");
const icons_1 = require("@ant-design/icons");
const use_emotion_css_1 = require("@ant-design/use-emotion-css");
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const querystring_1 = require("querystring");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const HeaderDropdown_1 = require("../HeaderDropdown");
const AvatarName = () => {
    const { initialState } = (0, max_1.useModel)('@@initialState');
    const { currentUser } = initialState || {};
    return <span className="anticon">{currentUser === null || currentUser === void 0 ? void 0 : currentUser.name}</span>;
};
exports.AvatarName = AvatarName;
const AvatarDropdown = ({ menu, children }) => {
    /**
     * 退出登录，并且将当前的 url 保存
     */
    const loginOut = async () => {
        await (0, api_1.outLogin)();
        const { search, pathname } = window.location;
        const urlParams = new URL(window.location.href).searchParams;
        /** 此方法会跳转到 redirect 参数所在的位置 */
        const redirect = urlParams.get('redirect');
        // Note: There may be security issues, please note
        if (window.location.pathname !== '/user/login' && !redirect) {
            max_1.history.replace({
                pathname: '/user/login',
                search: (0, querystring_1.stringify)({
                    redirect: pathname + search,
                }),
            });
        }
    };
    const actionClassName = (0, use_emotion_css_1.useEmotionCss)(({ token }) => {
        return {
            display: 'flex',
            height: '48px',
            marginLeft: 'auto',
            overflow: 'hidden',
            alignItems: 'center',
            padding: '0 8px',
            cursor: 'pointer',
            borderRadius: token.borderRadius,
            '&:hover': {
                backgroundColor: token.colorBgTextHover,
            },
        };
    });
    const { initialState, setInitialState } = (0, max_1.useModel)('@@initialState');
    const onMenuClick = (0, react_1.useCallback)((event) => {
        const { key } = event;
        if (key === 'logout') {
            (0, react_dom_1.flushSync)(() => {
                setInitialState((s) => (Object.assign(Object.assign({}, s), { currentUser: undefined })));
            });
            loginOut();
            return;
        }
        max_1.history.push(`/account/${key}`);
    }, [setInitialState]);
    const loading = (<span className={actionClassName}>
      <antd_1.Spin size="small" style={{
            marginLeft: 8,
            marginRight: 8,
        }}/>
    </span>);
    if (!initialState) {
        return loading;
    }
    const { currentUser } = initialState;
    if (!currentUser || !currentUser.name) {
        return loading;
    }
    const menuItems = [
        ...(menu
            ? [
                {
                    key: 'center',
                    icon: <icons_1.UserOutlined />,
                    label: '个人中心',
                },
                {
                    key: 'settings',
                    icon: <icons_1.SettingOutlined />,
                    label: '个人设置',
                },
                {
                    type: 'divider',
                },
            ]
            : []),
        {
            key: 'logout',
            icon: <icons_1.LogoutOutlined />,
            label: '退出登录',
        },
    ];
    return (<HeaderDropdown_1.default menu={{
            selectedKeys: [],
            onClick: onMenuClick,
            items: menuItems,
        }}>
      {children}
    </HeaderDropdown_1.default>);
};
exports.AvatarDropdown = AvatarDropdown;
