"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Footer_1 = require("@/components/Footer");
const api_1 = require("@/services/ant-design-pro/api");
const login_1 = require("@/services/ant-design-pro/login");
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const use_emotion_css_1 = require("@ant-design/use-emotion-css");
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const defaultSettings_1 = require("../../../../config/defaultSettings");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const ActionIcons = () => {
    const langClassName = (0, use_emotion_css_1.useEmotionCss)(({ token }) => {
        return {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive,
            },
        };
    });
    return (<>
      <icons_1.AlipayCircleOutlined key="AlipayCircleOutlined" className={langClassName}/>
      <icons_1.TaobaoCircleOutlined key="TaobaoCircleOutlined" className={langClassName}/>
      <icons_1.WeiboCircleOutlined key="WeiboCircleOutlined" className={langClassName}/>
    </>);
};
const Lang = () => {
    const langClassName = (0, use_emotion_css_1.useEmotionCss)(({ token }) => {
        return {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover,
            },
        };
    });
    return (<div className={langClassName} data-lang>
      {max_1.SelectLang && <max_1.SelectLang />}
    </div>);
};
const LoginMessage = ({ content }) => {
    return (<antd_1.Alert style={{
            marginBottom: 24,
        }} message={content} type="error" showIcon/>);
};
const Login = () => {
    const [userLoginState, setUserLoginState] = (0, react_1.useState)({});
    const [type, setType] = (0, react_1.useState)('account');
    const { initialState, setInitialState } = (0, max_1.useModel)('@@initialState');
    const containerClassName = (0, use_emotion_css_1.useEmotionCss)(() => {
        return {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%',
        };
    });
    const intl = (0, max_1.useIntl)();
    const fetchUserInfo = async () => {
        var _a;
        const userInfo = await ((_a = initialState === null || initialState === void 0 ? void 0 : initialState.fetchUserInfo) === null || _a === void 0 ? void 0 : _a.call(initialState));
        if (userInfo) {
            (0, react_dom_1.flushSync)(() => {
                setInitialState((s) => (Object.assign(Object.assign({}, s), { currentUser: userInfo })));
            });
        }
    };
    const handleSubmit = async (values) => {
        try {
            // 登录
            const msg = await (0, api_1.login)(Object.assign(Object.assign({}, values), { type }));
            if (msg.status === 'ok') {
                const defaultLoginSuccessMessage = intl.formatMessage({
                    id: 'pages.login.success',
                    defaultMessage: '登录成功！',
                });
                antd_1.message.success(defaultLoginSuccessMessage);
                await fetchUserInfo();
                const urlParams = new URL(window.location.href).searchParams;
                max_1.history.push(urlParams.get('redirect') || '/');
                return;
            }
            console.log(msg);
            // 如果失败去设置用户错误信息
            setUserLoginState(msg);
        }
        catch (error) {
            const defaultLoginFailureMessage = intl.formatMessage({
                id: 'pages.login.failure',
                defaultMessage: '登录失败，请重试！',
            });
            console.log(error);
            antd_1.message.error(defaultLoginFailureMessage);
        }
    };
    const { status, type: loginType } = userLoginState;
    return (<div className={containerClassName}>
      <max_1.Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '登录页',
        })}
          - {defaultSettings_1.default.title}
        </title>
      </max_1.Helmet>
      <Lang />
      <div style={{
            flex: '1',
            padding: '32px 0',
        }}>
        <pro_components_1.LoginForm contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
        }} logo={<img alt="logo" src="/logo.svg"/>} title="Ant Design" subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })} initialValues={{
            autoLogin: true,
        }} actions={[
            <max_1.FormattedMessage key="loginWith" id="pages.login.loginWith" defaultMessage="其他登录方式"/>,
            <ActionIcons key="icons"/>,
        ]} onFinish={async (values) => {
            await handleSubmit(values);
        }}>
          <antd_1.Tabs activeKey={type} onChange={setType} centered items={[
            {
                key: 'account',
                label: intl.formatMessage({
                    id: 'pages.login.accountLogin.tab',
                    defaultMessage: '账户密码登录',
                }),
            },
            {
                key: 'mobile',
                label: intl.formatMessage({
                    id: 'pages.login.phoneLogin.tab',
                    defaultMessage: '手机号登录',
                }),
            },
        ]}/>

          {status === 'error' && loginType === 'account' && (<LoginMessage content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)',
            })}/>)}
          {type === 'account' && (<>
              <pro_components_1.ProFormText name="username" fieldProps={{
                size: 'large',
                prefix: <icons_1.UserOutlined />,
            }} placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名: admin or user',
            })} rules={[
                {
                    required: true,
                    message: (<max_1.FormattedMessage id="pages.login.username.required" defaultMessage="请输入用户名!"/>),
                },
            ]}/>
              <pro_components_1.ProFormText.Password name="password" fieldProps={{
                size: 'large',
                prefix: <icons_1.LockOutlined />,
            }} placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码: ant.design',
            })} rules={[
                {
                    required: true,
                    message: (<max_1.FormattedMessage id="pages.login.password.required" defaultMessage="请输入密码！"/>),
                },
            ]}/>
            </>)}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误"/>}
          {type === 'mobile' && (<>
              <pro_components_1.ProFormText fieldProps={{
                size: 'large',
                prefix: <icons_1.MobileOutlined />,
            }} name="mobile" placeholder={intl.formatMessage({
                id: 'pages.login.phoneNumber.placeholder',
                defaultMessage: '手机号',
            })} rules={[
                {
                    required: true,
                    message: (<max_1.FormattedMessage id="pages.login.phoneNumber.required" defaultMessage="请输入手机号！"/>),
                },
                {
                    pattern: /^1\d{10}$/,
                    message: (<max_1.FormattedMessage id="pages.login.phoneNumber.invalid" defaultMessage="手机号格式错误！"/>),
                },
            ]}/>
              <pro_components_1.ProFormCaptcha fieldProps={{
                size: 'large',
                prefix: <icons_1.LockOutlined />,
            }} captchaProps={{
                size: 'large',
            }} placeholder={intl.formatMessage({
                id: 'pages.login.captcha.placeholder',
                defaultMessage: '请输入验证码',
            })} captchaTextRender={(timing, count) => {
                if (timing) {
                    return `${count} ${intl.formatMessage({
                        id: 'pages.getCaptchaSecondText',
                        defaultMessage: '获取验证码',
                    })}`;
                }
                return intl.formatMessage({
                    id: 'pages.login.phoneLogin.getVerificationCode',
                    defaultMessage: '获取验证码',
                });
            }} name="captcha" rules={[
                {
                    required: true,
                    message: (<max_1.FormattedMessage id="pages.login.captcha.required" defaultMessage="请输入验证码！"/>),
                },
            ]} onGetCaptcha={async (phone) => {
                const result = await (0, login_1.getFakeCaptcha)({
                    phone,
                });
                if (!result) {
                    return;
                }
                antd_1.message.success('获取验证码成功！验证码为：1234');
            }}/>
            </>)}
          <div style={{
            marginBottom: 24,
        }}>
            <pro_components_1.ProFormCheckbox noStyle name="autoLogin">
              <max_1.FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录"/>
            </pro_components_1.ProFormCheckbox>
            <a style={{
            float: 'right',
        }}>
              <max_1.FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码"/>
            </a>
          </div>
        </pro_components_1.LoginForm>
      </div>
      <Footer_1.default />
    </div>);
};
exports.default = Login;
