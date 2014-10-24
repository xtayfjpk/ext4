/**
 * Created by zj on 13-12-12.
 * 部门显示列表
 */

Ext.define("AM.view.DeptList", {
    extend : "Ext.grid.Panel",
    alias : "widget.deptlist",
    store : "DeptStore",
    //layout : "fit",
    selModel : {
        selType : "checkboxmodel"
    },
    multiSelect : true,
    //frame : true,
    enableKeyNav : true,
    columnLines : true,
    columns : [{
        text : "部门名称",
        dataIndex : "text",
        width : 100,
        field : {
            xtype : "textfield",
            allowBlank:false
        }
    }, {
        text : "部门经理",
        dataIndex : "manager",
        width : 100,
        field : {
            xtype : "textfield",
            allowBlank:false
        }
    }, {
        text : "排序字段",
        dataIndex : "orderIndex",
        width : 100
    }, {
        text : "职能简介",
        dataIndex : "info",
        width : 100
    }],
    tbar : [{
        xtype : "button",
        text : "添加",
        id : "dept-add"
    }, {
        xtype : "button",
        text : "删除",
        id : "dept-delete"
    }, {
        xtype : "button",
        text : "保存",
        id : "dept-save"
    }],
    dockedItems : [{
        xtype : "pagingtoolbar",
        store : "DeptStore",
        dock : "bottom",
        displayInfo : true
    }],
    initComponent : function() {
        //添加单元编辑插件
        this.editing = Ext.create("Ext.grid.plugin.CellEditing");//自己添加的一个成员变量
        this.plugins = [this.editing];
        this.callParent(arguments);
    }
});