/**
 * Created by zj on 13-12-18.
 */
Ext.define("reply.view.RecentContactGrid", {
    extend : "Ext.grid.Panel",
    alias : "widget.recentcontactgrid",
    title:'最近联系人',
    columnLines : true,
    columnWidth : 0.2,
    minHeight : 400,
    selType:'checkboxmodel',
    multiSelect:true,
    columns:[{
        text:'姓名',
        dataIndex:'viewName',
        width:110,
        menuDisabled:true,
        sortable:false
    }, {
        text:'部门',
        dataIndex:'department',
        width:80,
        menuDisabled:true,
        sortable:false
    }],
    tbar : [{
        xtype : "button",
        text : "添加到收件人"
    }, "-", {
        xtype : "button",
        text : "清空"
    }],
    bbar : [{
        xtype : "button",
        text : "隐藏字段数量"
    }],
    store : "RecentContactStore",
    listeners : {
        "render" : function(_grid) {
            _grid.setHeight(document.body.clientHeight);
        }
    }
});