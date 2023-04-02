"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = require("react");
const testBrowser_1 = require("@@/testBrowser");
// @ts-ignore
const requestRecordMock_1 = require("@@/requestRecordMock");
const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
let server;
describe('Login Page', () => {
    beforeAll(async () => {
        server = await (0, requestRecordMock_1.startMock)({
            port: 8000,
            scene: 'login',
        });
    });
    afterAll(() => {
        server === null || server === void 0 ? void 0 : server.close();
    });
    it('should show login form', async () => {
        var _a, _b;
        const historyRef = react_2.default.createRef();
        const rootContainer = (0, react_1.render)(<testBrowser_1.TestBrowser historyRef={historyRef} location={{
                pathname: '/user/login',
            }}/>);
        await rootContainer.findAllByText('Ant Design');
        (0, react_1.act)(() => {
            var _a;
            (_a = historyRef.current) === null || _a === void 0 ? void 0 : _a.push('/user/login');
        });
        expect((_b = (_a = rootContainer.baseElement) === null || _a === void 0 ? void 0 : _a.querySelector('.ant-pro-form-login-desc')) === null || _b === void 0 ? void 0 : _b.textContent).toBe('Ant Design is the most influential web design specification in Xihu district');
        expect(rootContainer.asFragment()).toMatchSnapshot();
        rootContainer.unmount();
    });
    it('should login success', async () => {
        const historyRef = react_2.default.createRef();
        const rootContainer = (0, react_1.render)(<testBrowser_1.TestBrowser historyRef={historyRef} location={{
                pathname: '/user/login',
            }}/>);
        await rootContainer.findAllByText('Ant Design');
        const userNameInput = await rootContainer.findByPlaceholderText('Username: admin or user');
        (0, react_1.act)(() => {
            react_1.fireEvent.change(userNameInput, { target: { value: 'admin' } });
        });
        const passwordInput = await rootContainer.findByPlaceholderText('Password: ant.design');
        (0, react_1.act)(() => {
            react_1.fireEvent.change(passwordInput, { target: { value: 'ant.design' } });
        });
        await (await rootContainer.findByText('Login')).click();
        // 等待接口返回结果
        await waitTime(5000);
        await rootContainer.findAllByText('Ant Design Pro');
        expect(rootContainer.asFragment()).toMatchSnapshot();
        await waitTime(2000);
        rootContainer.unmount();
    });
});
