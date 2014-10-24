/**
 * Created by zj on 13-12-11.
 */
Ext.define("dzgw.view.RecentContactView", {
    extend : "Ext.grid.Panel",
    alias:'widget.recentcontactview',
    title:"最近联系人",
    width:700,
    columns:[{
        xtype:'rownumberer'
    }, {
        text:'用户名',
        dataIndex:'username',
        width:200
    }, {
        text:'显示名',
        dataIndex:'viewName',
        width:200
    }, {
        text:'部门',
        dataIndex:'department',
        width:200
    }],
    store:"RecentContactStore",
    tbar : [{
        xtype : "button",
        text: "增加",
        id : "dzgw_add"
    }, {
        xtype : "button",
        text: "查看",
        id : "dzgw_view"
    }],
    initComponent:function(){
        this.callParent(arguments);
        //this.getStore().load();
    }
});