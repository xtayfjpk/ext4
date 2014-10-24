/**
 * Created by zj on 13-12-16.
 */
Ext.define("inbox.view.ReceiveDocGrid", {
    extend : "Ext.grid.Panel",
    //title : "收件箱",
    alias : "widget.receivedocgrid",
    width : 1100,
    frame : true,
    store : "ReceiveDocStore",
    selType:'checkboxmodel',//设定选择模式
    multiSelect:true,
    columnLines : true,
    columns : [{
        xtype : "rownumberer"
    },
        {
        text:'读取状态',
        dataIndex:'state',
        width:100,
        xtype : "numberconditioncolumn",
        zeroText : "未读",
        oneText : "已读",
        align : "center",
        menuDisabled : true
    }, {
        text:'发件人',
        dataIndex:'sender',
        width:150,
        align : "center",
        sortable : "false",
        menuDisabled : true
    }, {
        text:'主题',
        dataIndex:'title',
        width:500,
        align : "center",
        sortable : "false",
        menuDisabled : true
    }, {
        text:'时间',
        xtype : "datecolumn",
        format : "Y-m-d",
        dataIndex:'sendTime',
        width:150,
        align : "center",
        menuDisabled : true
    }, {
        text:'查看材料明细',
        xtype : "actioncolumn",
        width:100,
        tooltip : "查看材料明细",
        icon : "icon_edit.gif",
        align : "center",
        sortable : "false",
        menuDisabled : true,
        tdCls : "hand"
    }, {
        text:'删除',
        xtype : "actioncolumn",
        width:40,
        icon : "icon_edit.gif",
        align : "center",
        sortable : "false",
        menuDisabled : true,
        tdCls : "hand"
    }],
    bbar : ["->", {
        xtype : "pagingtoolbar",
        store : "ReceiveDocStore",
        displayInfo : true
    }],
    tbar : ["-", {
        xtype : "button",
        text : "删除"
    }, "-", {
        xtype : "textfield",
        width : 400,
        margin : "0 0 0 100"
    }, "-", {
        xtype : "button",
        text : "搜索"
    }, "-" , "->", {
        xtype : "pagingtoolbar",
        store : "ReceiveDocStore",
        displayInfo : true
    }],


    initComponent:function(){
        this.callParent(arguments);
    }
});