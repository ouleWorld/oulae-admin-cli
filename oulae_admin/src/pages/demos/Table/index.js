"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@ant-design/icons");
const pro_components_1 = require("@ant-design/pro-components");
const antd_1 = require("antd");
const react_1 = require("react");
const umi_request_1 = require("umi-request");
const columns = [
    /**
     * Q: 这里是什么意思呢？没有搞懂
     * A:
     * valueType: 索引带边框 (这个类型官网是没有写的，我们只能从 ts 的源码中找到)
     * 我们可以使用这个类型来表示 item 在 table 中的序号(区别于 ID)
     *
     * 搜索表单：valueType 为 index indexBorder option 和没有 dataIndex 和 key 的列将会忽略。
     */
    {
        dataIndex: 'index',
        valueType: 'indexBorder',
        width: 48,
    },
    {
        dataIndex: 'id',
        title: 'id',
        /**
         * Q: sorter 这个排序有什么特性呢？它是一种本地的排序，还是说是一种接口的排序
         * A:
         * 两种特性都是有的：
         * 当 sorter 为 true 时，它是纯粹的接口排序，它遵守 antd pro 的协议，会改变 request sort 参数的信息
         * 当 sorter 为一个函数时，它是纯粹的前端排序，它会将结果处理成为我们给定的排序结果
         * 不过需要注意的是，这两种类型均会重新触发一次 request 请求
         */
        sorter: (a, b) => {
            console.log('a.id', a.id, b.id);
            return a.id - b.id;
        },
    },
    {
        title: '标题',
        dataIndex: 'title',
        copyable: true,
        ellipsis: true,
        tip: '标题过长会自动收缩',
        // 有点厉害，我们还可以通过这样的方式做一次表单校验！
        formItemProps: {
            rules: [
                {
                    required: true,
                    message: '此项为必填项',
                },
            ],
        },
    },
    {
        /**
         * Q: 这里这个 disable 的意义没有理解到底是什么意思
         * A:
         * 表示不可编辑的意思，即用户不能改变这一列是否展示的状态(点击设置图标就知道啦)
         */
        disable: true,
        title: '状态',
        dataIndex: 'state',
        filters: true,
        /**
         * Q: 这里这个 onFilter 的意义没有理解到底是什么意思
         * A:
         *
         * filters: 这个参数是开启 table  的筛选能力，开启之后，会自动带到 request filter 参数
         * onFilter：筛选表单，为 true 时使用 ProTable 自带的(即本地会接口的基础上再做一次筛选)；为 false 时关闭本地筛选，即直接渲染接口的数据
         */
        onFilter: true,
        ellipsis: true,
        valueType: 'select',
        valueEnum: {
            all: { text: '超长'.repeat(50) },
            open: {
                text: '未解决',
                status: 'Error',
            },
            closed: {
                text: '已解决',
                status: 'Success',
                disabled: true,
            },
            processing: {
                text: '解决中',
                status: 'Processing',
            },
        },
    },
    {
        disable: true,
        title: '标签',
        dataIndex: 'labels',
        search: false,
        renderFormItem: (_, { defaultRender }) => {
            return defaultRender(_);
        },
        render: (_, record) => (<antd_1.Space>
        {record.labels.map(({ name, color }) => (<antd_1.Tag color={color} key={name}>
            {name}
          </antd_1.Tag>))}
      </antd_1.Space>),
    },
    {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'created_at',
        valueType: 'date',
        sorter: true,
        hideInSearch: true,
    },
    {
        title: '创建时间',
        dataIndex: 'created_at',
        valueType: 'dateRange',
        hideInTable: true,
        search: {
            transform: (value) => {
                console.log('transform value', value);
                return {
                    startTime: value[0],
                    endTime: value[1],
                };
            },
        },
    },
    {
        title: '操作',
        valueType: 'option',
        key: 'option',
        render: (text, record, _, action) => [
            <a key="editable" onClick={() => {
                    var _a;
                    (_a = action === null || action === void 0 ? void 0 : action.startEditable) === null || _a === void 0 ? void 0 : _a.call(action, record.id);
                }}>
        编辑
      </a>,
            <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
            <pro_components_1.TableDropdown key="actionGroup" onSelect={() => action === null || action === void 0 ? void 0 : action.reload()} menus={[
                    { key: 'copy', name: '复制' },
                    { key: 'delete', name: '删除' },
                ]}/>,
        ],
    },
];
exports.default = () => {
    const actionRef = (0, react_1.useRef)();
    return (<pro_components_1.PageContainer>
      <pro_components_1.ProTable columns={columns} actionRef={actionRef} cardBordered request={async (params = {}, sort, filter) => {
            console.log('table request: ', params, sort, filter);
            return (0, umi_request_1.default)('https://proapi.azurewebsites.net/github/issues', {
                params,
            });
        }} editable={{
            type: 'multiple',
        }} 
    /**
     * Q: columnsState 这个是啥？
     * A:
     * 受控的列状态，可以操作显示隐藏
     * 用户可能会通过设置 icon 编辑个性化的配置，这个就是缓存这个配置的相关配置
     */
    columnsState={{
            persistenceKey: 'pro-table-singe-demos',
            persistenceType: 'localStorage',
            onChange(value) {
                console.log('value: ', value);
            },
        }} rowKey="id" search={{
            labelWidth: 'auto',
        }} options={{
            fullScreen: true,
            setting: {
                listsHeight: 400,
            },
        }} 
    // 这里将参数自动同步到了 url 上面，这样感觉分享链接就很舒服了
    form={{
            // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
            syncToUrl: (values, type) => {
                if (type === 'get') {
                    return Object.assign(Object.assign({}, values), { created_at: [values.startTime, values.endTime] });
                }
                return values;
            },
        }} pagination={{
            pageSize: 5,
            onChange: (page) => console.log(page),
        }} 
    // 日期的统一格式化处理
    dateFormatter="number" headerTitle="高级表格" toolBarRender={() => [
            <antd_1.Button key="button" icon={<icons_1.PlusOutlined />} type="primary">
            新建
          </antd_1.Button>,
            <antd_1.Dropdown key="menu" menu={{
                    items: [
                        {
                            label: '1st item',
                            key: '1',
                        },
                        {
                            label: '2nd item',
                            key: '1',
                        },
                        {
                            label: '3rd item',
                            key: '1',
                        },
                    ],
                }}>
            <antd_1.Button>
              <icons_1.EllipsisOutlined />
            </antd_1.Button>
          </antd_1.Dropdown>,
        ]}/>
    </pro_components_1.PageContainer>);
};
