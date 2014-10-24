/**
 * Created by zj on 13-12-15.
 */
Ext.define("module.view.ModuleListPanel", {
    id : "esb_modulelistpanel",
    extend : "Ext.grid.Panel",
    alias : "widget.modulelistpanel",
    title : "模块管理",
    columnLines : true,
    region: 'center',
    columns: [{
            header: '名称',  dataIndex: 'name' }, { header: '地址', dataIndex: 'url', flex:1
        }, {
            header: '权重',  dataIndex: 'weight', align : 'center'
        }, {
            header: '是否全局', dataIndex: 'general',xtype : 'booleancolumn',
            trueText : "是", falseText : "否", align : 'center'
        }, {
            xtype : 'booleancolumn',
            header: '是否启用',  dataIndex: 'enabled',
            trueText : "是", falseText : "否", align : 'center'
        }, {
            header: '角色分配', xtype:'actioncolumn',
            icon:'image/icon_role.gif',
            align:'center',tdCls:'hand',width:60,sortable:false,menuDisabled:true
        }, {
            header: '关联权限', xtype:'actioncolumn',
            icon:'image/icon_permission.gif',
            align:'center',tdCls:'hand',width:60,sortable:false,menuDisabled:true
        }, {
            header: '编辑', xtype:'actioncolumn',
            icon:'image/icon_edit.gif',
            align:'center',tdCls:'hand',width:60,sortable:false,menuDisabled:true
        }, {
            header: '删除', xtype:'actioncolumn',
            icon:'image/icon_delete.gif',
            align:'center',tdCls:'hand',width:60,sortable:false,menuDisabled:true
        }
    ],
    loadMask:{
        msg : '正在加载表格数据,请稍等...'
    },
    store : "ModuleStore",
    tbar : [{
        xtype : "button",
        text : "添加模块"
    }],
    renderTo: Ext.getBody(),
    dockedItems : [{
        xtype : "pagingtoolbar",
        store : "ModuleStore",
        dock : "bottom",
        displayInfo : true
    }]
});