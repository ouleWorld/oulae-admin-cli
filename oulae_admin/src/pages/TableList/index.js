"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@/services/ant-design-pro/api");
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const max_1 = require("@umijs/max");
const antd_1 = require("antd");
const react_1 = require("react");
const UpdateForm_1 = require("./components/UpdateForm");
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields) => {
    const hide = antd_1.message.loading('正在添加');
    try {
        await (0, api_1.addRule)(Object.assign({}, fields));
        hide();
        antd_1.message.success('Added successfully');
        return true;
    }
    catch (error) {
        hide();
        antd_1.message.error('Adding failed, please try again!');
        return false;
    }
};
/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields) => {
    const hide = antd_1.message.loading('Configuring');
    try {
        await (0, api_1.updateRule)({
            name: fields.name,
            desc: fields.desc,
            key: fields.key,
        });
        hide();
        antd_1.message.success('Configuration is successful');
        return true;
    }
    catch (error) {
        hide();
        antd_1.message.error('Configuration failed, please try again!');
        return false;
    }
};
/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows) => {
    const hide = antd_1.message.loading('正在删除');
    if (!selectedRows)
        return true;
    try {
        await (0, api_1.removeRule)({
            key: selectedRows.map((row) => row.key),
        });
        hide();
        antd_1.message.success('Deleted successfully and will refresh soon');
        return true;
    }
    catch (error) {
        hide();
        antd_1.message.error('Delete failed, please try again');
        return false;
    }
};
const TableList = () => {
    /**
     * @en-US Pop-up window of new window
     * @zh-CN 新建窗口的弹窗
     *  */
    const [createModalOpen, handleModalOpen] = (0, react_1.useState)(false);
    /**
     * @en-US The pop-up window of the distribution update window
     * @zh-CN 分布更新窗口的弹窗
     * */
    const [updateModalOpen, handleUpdateModalOpen] = (0, react_1.useState)(false);
    const [showDetail, setShowDetail] = (0, react_1.useState)(false);
    const actionRef = (0, react_1.useRef)();
    const [currentRow, setCurrentRow] = (0, react_1.useState)();
    const [selectedRowsState, setSelectedRows] = (0, react_1.useState)([]);
    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */
    const intl = (0, max_1.useIntl)();
    const columns = [
        {
            title: (<max_1.FormattedMessage id="pages.searchTable.updateForm.ruleName.nameLabel" defaultMessage="Rule name"/>),
            dataIndex: 'name',
            tip: 'The rule name is the unique key',
            render: (dom, entity) => {
                return (<a onClick={() => {
                        setCurrentRow(entity);
                        setShowDetail(true);
                    }}>
            {dom}
          </a>);
            },
        },
        {
            title: <max_1.FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="Description"/>,
            dataIndex: 'desc',
            valueType: 'textarea',
        },
        {
            title: (<max_1.FormattedMessage id="pages.searchTable.titleCallNo" defaultMessage="Number of service calls"/>),
            dataIndex: 'callNo',
            sorter: true,
            hideInForm: true,
            renderText: (val) => `${val}${intl.formatMessage({
                id: 'pages.searchTable.tenThousand',
                defaultMessage: ' 万 ',
            })}`,
        },
        {
            title: <max_1.FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status"/>,
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (<max_1.FormattedMessage id="pages.searchTable.nameStatus.default" defaultMessage="Shut down"/>),
                    status: 'Default',
                },
                1: {
                    text: (<max_1.FormattedMessage id="pages.searchTable.nameStatus.running" defaultMessage="Running"/>),
                    status: 'Processing',
                },
                2: {
                    text: (<max_1.FormattedMessage id="pages.searchTable.nameStatus.online" defaultMessage="Online"/>),
                    status: 'Success',
                },
                3: {
                    text: (<max_1.FormattedMessage id="pages.searchTable.nameStatus.abnormal" defaultMessage="Abnormal"/>),
                    status: 'Error',
                },
            },
        },
        {
            title: (<max_1.FormattedMessage id="pages.searchTable.titleUpdatedAt" defaultMessage="Last scheduled time"/>),
            sorter: true,
            dataIndex: 'updatedAt',
            valueType: 'dateTime',
            renderFormItem: (item, _a, form) => {
                var { defaultRender } = _a, rest = __rest(_a, ["defaultRender"]);
                const status = form.getFieldValue('status');
                if (`${status}` === '0') {
                    return false;
                }
                if (`${status}` === '3') {
                    return (<antd_1.Input {...rest} placeholder={intl.formatMessage({
                            id: 'pages.searchTable.exception',
                            defaultMessage: 'Please enter the reason for the exception!',
                        })}/>);
                }
                return defaultRender(item);
            },
        },
        {
            title: <max_1.FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating"/>,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                <a key="config" onClick={() => {
                        handleUpdateModalOpen(true);
                        setCurrentRow(record);
                    }}>
          <max_1.FormattedMessage id="pages.searchTable.config" defaultMessage="Configuration"/>
        </a>,
                <a key="subscribeAlert" href="https://procomponents.ant.design/">
          <max_1.FormattedMessage id="pages.searchTable.subscribeAlert" defaultMessage="Subscribe to alerts"/>
        </a>,
            ],
        },
    ];
    return (<pro_components_1.PageContainer>
      <pro_components_1.ProTable headerTitle={intl.formatMessage({
            id: 'pages.searchTable.title',
            defaultMessage: 'Enquiry form',
        })} actionRef={actionRef} rowKey="key" search={{
            labelWidth: 120,
        }} toolBarRender={() => [
            <antd_1.Button type="primary" key="primary" onClick={() => {
                    handleModalOpen(true);
                }}>
            <icons_1.PlusOutlined /> <max_1.FormattedMessage id="pages.searchTable.new" defaultMessage="New"/>
          </antd_1.Button>,
        ]} request={api_1.rule} columns={columns} rowSelection={{
            onChange: (_, selectedRows) => {
                setSelectedRows(selectedRows);
            },
        }}/>
      {(selectedRowsState === null || selectedRowsState === void 0 ? void 0 : selectedRowsState.length) > 0 && (<pro_components_1.FooterToolbar extra={<div>
              <max_1.FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen"/>{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <max_1.FormattedMessage id="pages.searchTable.item" defaultMessage="项"/>
              &nbsp;&nbsp;
              <span>
                <max_1.FormattedMessage id="pages.searchTable.totalServiceCalls" defaultMessage="Total number of service calls"/>{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.callNo, 0)}{' '}
                <max_1.FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万"/>
              </span>
            </div>}>
          <antd_1.Button onClick={async () => {
                var _a, _b;
                await handleRemove(selectedRowsState);
                setSelectedRows([]);
                (_b = (_a = actionRef.current) === null || _a === void 0 ? void 0 : _a.reloadAndRest) === null || _b === void 0 ? void 0 : _b.call(_a);
            }}>
            <max_1.FormattedMessage id="pages.searchTable.batchDeletion" defaultMessage="Batch deletion"/>
          </antd_1.Button>
          <antd_1.Button type="primary">
            <max_1.FormattedMessage id="pages.searchTable.batchApproval" defaultMessage="Batch approval"/>
          </antd_1.Button>
        </pro_components_1.FooterToolbar>)}
      <pro_components_1.ModalForm title={intl.formatMessage({
            id: 'pages.searchTable.createForm.newRule',
            defaultMessage: 'New rule',
        })} width="400px" open={createModalOpen} onOpenChange={handleModalOpen} onFinish={async (value) => {
            const success = await handleAdd(value);
            if (success) {
                handleModalOpen(false);
                if (actionRef.current) {
                    actionRef.current.reload();
                }
            }
        }}>
        <pro_components_1.ProFormText rules={[
            {
                required: true,
                message: (<max_1.FormattedMessage id="pages.searchTable.ruleName" defaultMessage="Rule name is required"/>),
            },
        ]} width="md" name="name"/>
        <pro_components_1.ProFormTextArea width="md" name="desc"/>
      </pro_components_1.ModalForm>
      <UpdateForm_1.default onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
                handleUpdateModalOpen(false);
                setCurrentRow(undefined);
                if (actionRef.current) {
                    actionRef.current.reload();
                }
            }
        }} onCancel={() => {
            handleUpdateModalOpen(false);
            if (!showDetail) {
                setCurrentRow(undefined);
            }
        }} updateModalOpen={updateModalOpen} values={currentRow || {}}/>

      <antd_1.Drawer width={600} open={showDetail} onClose={() => {
            setCurrentRow(undefined);
            setShowDetail(false);
        }} closable={false}>
        {(currentRow === null || currentRow === void 0 ? void 0 : currentRow.name) && (<pro_components_1.ProDescriptions column={2} title={currentRow === null || currentRow === void 0 ? void 0 : currentRow.name} request={async () => ({
                data: currentRow || {},
            })} params={{
                id: currentRow === null || currentRow === void 0 ? void 0 : currentRow.name,
            }} columns={columns}/>)}
      </antd_1.Drawer>
    </pro_components_1.PageContainer>);
};
exports.default = TableList;
