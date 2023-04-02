"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pro_components_1 = require("@ant-design/pro-components");
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const react_1 = require("react");
const UpdateForm = (props) => {
    const intl = (0, max_1.useIntl)();
    return (<pro_components_1.StepsForm stepsProps={{
            size: 'small',
        }} stepsFormRender={(dom, submitter) => {
            return (<antd_1.Modal width={640} bodyStyle={{ padding: '32px 40px 48px' }} destroyOnClose title={intl.formatMessage({
                    id: 'pages.searchTable.updateForm.ruleConfig',
                    defaultMessage: '规则配置',
                })} open={props.updateModalOpen} footer={submitter} onCancel={() => {
                    props.onCancel();
                }}>
            {dom}
          </antd_1.Modal>);
        }} onFinish={props.onSubmit}>
      <pro_components_1.StepsForm.StepForm initialValues={{
            name: props.values.name,
            desc: props.values.desc,
        }} title={intl.formatMessage({
            id: 'pages.searchTable.updateForm.basicConfig',
            defaultMessage: '基本信息',
        })}>
        <pro_components_1.ProFormText name="name" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleName.nameLabel',
            defaultMessage: '规则名称',
        })} width="md" rules={[
            {
                required: true,
                message: (<max_1.FormattedMessage id="pages.searchTable.updateForm.ruleName.nameRules" defaultMessage="请输入规则名称！"/>),
            },
        ]}/>
        <pro_components_1.ProFormTextArea name="desc" width="md" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleDesc.descLabel',
            defaultMessage: '规则描述',
        })} placeholder={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleDesc.descPlaceholder',
            defaultMessage: '请输入至少五个字符',
        })} rules={[
            {
                required: true,
                message: (<max_1.FormattedMessage id="pages.searchTable.updateForm.ruleDesc.descRules" defaultMessage="请输入至少五个字符的规则描述！"/>),
                min: 5,
            },
        ]}/>
      </pro_components_1.StepsForm.StepForm>
      <pro_components_1.StepsForm.StepForm initialValues={{
            target: '0',
            template: '0',
        }} title={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleProps.title',
            defaultMessage: '配置规则属性',
        })}>
        <pro_components_1.ProFormSelect name="target" width="md" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.object',
            defaultMessage: '监控对象',
        })} valueEnum={{
            0: '表一',
            1: '表二',
        }}/>
        <pro_components_1.ProFormSelect name="template" width="md" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleProps.templateLabel',
            defaultMessage: '规则模板',
        })} valueEnum={{
            0: '规则模板一',
            1: '规则模板二',
        }}/>
        <pro_components_1.ProFormRadio.Group name="type" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleProps.typeLabel',
            defaultMessage: '规则类型',
        })} options={[
            {
                value: '0',
                label: '强',
            },
            {
                value: '1',
                label: '弱',
            },
        ]}/>
      </pro_components_1.StepsForm.StepForm>
      <pro_components_1.StepsForm.StepForm initialValues={{
            type: '1',
            frequency: 'month',
        }} title={intl.formatMessage({
            id: 'pages.searchTable.updateForm.schedulingPeriod.title',
            defaultMessage: '设定调度周期',
        })}>
        <pro_components_1.ProFormDateTimePicker name="time" width="md" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.schedulingPeriod.timeLabel',
            defaultMessage: '开始时间',
        })} rules={[
            {
                required: true,
                message: (<max_1.FormattedMessage id="pages.searchTable.updateForm.schedulingPeriod.timeRules" defaultMessage="请选择开始时间！"/>),
            },
        ]}/>
        <pro_components_1.ProFormSelect name="frequency" label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.object',
            defaultMessage: '监控对象',
        })} width="md" valueEnum={{
            month: '月',
            week: '周',
        }}/>
      </pro_components_1.StepsForm.StepForm>
    </pro_components_1.StepsForm>);
};
exports.default = UpdateForm;
