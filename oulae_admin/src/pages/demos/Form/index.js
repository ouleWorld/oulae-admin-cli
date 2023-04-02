"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const antd_1 = require("antd");
const react_1 = require("react");
const iconStyles = {
    marginInlineStart: '16px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};
const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
exports.default = () => {
    const [type, setType] = (0, react_1.useState)('ProForm');
    const Components = {
        ProForm: pro_components_1.ProForm,
        ModalForm: pro_components_1.ModalForm,
        DrawerForm: pro_components_1.DrawerForm,
        QueryFilter: pro_components_1.QueryFilter,
        LightFilter: pro_components_1.LightFilter,
        StepsForm: pro_components_1.StepsForm,
        LoginForm: pro_components_1.LoginForm,
    };
    if (type === 'StepsForm') {
        return (<>
        <pro_components_1.ProFormRadio.Group style={{
                margin: 16,
            }} radioType="button" fieldProps={{
                value: type,
                onChange: (e) => setType(e.target.value),
            }} options={[
                'LightFilter',
                'ProForm',
                'ModalForm',
                'DrawerForm',
                'QueryFilter',
                'StepsForm',
                'LoginForm',
            ]}/>
        <pro_components_1.StepsForm onFinish={async (values) => {
                await waitTime(2000);
                console.log(values);
                antd_1.message.success('提交成功');
            }}>
          <pro_components_1.StepsForm.StepForm title="第一步">
            <pro_components_1.ProForm.Group>
              <pro_components_1.ProFormText width="md" name="name" label="签约客户名称" tooltip="最长为 24 位" placeholder="请输入名称"/>
              <pro_components_1.ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称"/>
            </pro_components_1.ProForm.Group>
            <pro_components_1.ProForm.Group>
              <pro_components_1.ProFormText name={['contract', 'name']} width="md" label="合同名称" placeholder="请输入名称"/>
              <pro_components_1.ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="合同生效时间"/>
            </pro_components_1.ProForm.Group>
          </pro_components_1.StepsForm.StepForm>
          <pro_components_1.StepsForm.StepForm title="第二步">
            <pro_components_1.ProForm.Group>
              <pro_components_1.ProFormSelect options={[
                {
                    value: 'chapter',
                    label: '盖章后生效',
                },
            ]} readonly width="xs" name="useMode" label="合同约定生效方式"/>
              <pro_components_1.ProFormSelect width="xs" options={[
                {
                    value: 'time',
                    label: '履行完终止',
                },
            ]} name="unusedMode" label="合同约定失效效方式"/>
            </pro_components_1.ProForm.Group>
          </pro_components_1.StepsForm.StepForm>
          <pro_components_1.StepsForm.StepForm title="第二步">
            <pro_components_1.ProFormText width="sm" name="id" label="主合同编号"/>
            <pro_components_1.ProFormText name="project" width="md" disabled label="项目名称" initialValue="xxxx项目"/>
            <pro_components_1.ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途"/>
          </pro_components_1.StepsForm.StepForm>
        </pro_components_1.StepsForm>
      </>);
    }
    const FormComponents = Components[type];
    if (type === 'LoginForm') {
        return (<>
        {' '}
        <pro_components_1.ProFormRadio.Group style={{
                margin: 16,
            }} radioType="button" fieldProps={{
                value: type,
                onChange: (e) => setType(e.target.value),
            }} options={[
                'LightFilter',
                'ProForm',
                'ModalForm',
                'DrawerForm',
                'QueryFilter',
                'StepsForm',
                'LoginForm',
            ]}/>
        <FormComponents title="Github" subTitle="全球最大的代码托管平台" actions={<antd_1.Space>
              其他登录方式
              <icons_1.AlipayCircleOutlined style={iconStyles}/>
              <icons_1.TaobaoCircleOutlined style={iconStyles}/>
              <icons_1.WeiboCircleOutlined style={iconStyles}/>
            </antd_1.Space>}>
          <pro_components_1.ProFormText name="username" fieldProps={{
                size: 'large',
                prefix: <icons_1.UserOutlined className={'prefixIcon'}/>,
            }} placeholder={'用户名: admin or user'} rules={[
                {
                    required: true,
                    message: '请输入用户名!',
                },
            ]}/>
          <pro_components_1.ProFormText.Password name="password" fieldProps={{
                size: 'large',
                prefix: <icons_1.LockOutlined className={'prefixIcon'}/>,
            }} placeholder={'密码: ant.design'} rules={[
                {
                    required: true,
                    message: '请输入密码！',
                },
            ]}/>
        </FormComponents>
      </>);
    }
    return (<pro_components_1.PageContainer>
      <pro_components_1.ProFormRadio.Group style={{
            margin: 16,
        }} radioType="button" fieldProps={{
            value: type,
            onChange: (e) => setType(e.target.value),
        }} options={[
            'LightFilter',
            'ProForm',
            'ModalForm',
            'DrawerForm',
            'QueryFilter',
            'StepsForm',
            'LoginForm',
        ]}/>
      <div style={{
            margin: 24,
        }}>
        <FormComponents labelWidth="auto" trigger={<antd_1.Button type="primary">
              <icons_1.PlusOutlined />
              新建表单
            </antd_1.Button>} onFinish={async (values) => {
            await waitTime(2000);
            console.log(values);
            antd_1.message.success('提交成功');
        }} initialValues={{
            name: '蚂蚁设计有限公司',
            useMode: 'chapter',
        }}>
          <pro_components_1.ProForm.Group>
            <pro_components_1.ProFormText width="md" name="name" label="签约客户名称" tooltip="最长为 24 位" placeholder="请输入名称"/>
            <pro_components_1.ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称"/>
          </pro_components_1.ProForm.Group>
          <pro_components_1.ProForm.Group>
            <pro_components_1.ProFormText name={['contract', 'name']} width="md" label="合同名称" placeholder="请输入名称"/>
            <pro_components_1.ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="合同生效时间"/>
          </pro_components_1.ProForm.Group>
          <pro_components_1.ProForm.Group>
            <pro_components_1.ProFormSelect options={[
            {
                value: 'chapter',
                label: '盖章后生效',
            },
        ]} readonly width="xs" name="useMode" label="合同约定生效方式"/>
            <pro_components_1.ProFormSelect width="xs" options={[
            {
                value: 'time',
                label: '履行完终止',
            },
        ]} name="unusedMode" label="合同约定失效效方式"/>
          </pro_components_1.ProForm.Group>
          <pro_components_1.ProFormText width="sm" name="id" label="主合同编号"/>
          <pro_components_1.ProFormText name="project" width="md" disabled label="项目名称" initialValue="xxxx项目"/>
          <pro_components_1.ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途"/>
        </FormComponents>
      </div>
    </pro_components_1.PageContainer>);
};
