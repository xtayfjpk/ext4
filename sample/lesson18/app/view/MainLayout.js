/**
 * Created by zj on 13-12-12.
 */
/**
 * 部门管理布局
 */
Ext.define("AM.view.MainLayout", {
    extend : "Ext.panel.Panel",
    alias : "widget.mainlayout",
    defaults : {
        bodyStyle : "padding:1px"
    },
    layout : "border",
    items : [{
        split : true,
        title : "部门树",
        region : "west",
        xtype : "panel",
        margins: "5 2 5 5",
        width: 200,
        collapsible: true,
        id : "west-tree",
        layout: "fit",
        items : [{
            id : "dept-tree",
            xtype : "depttree"
        }]
    }, {
        title : "部门数据表格",
        region : "center",
        xtype : "panel",
        id : "center-grid",
        margins: "5 5 5 0",
        layout : "fit",//fit布局是外部容器控制内部容器大小，使其充斥外部容器
        items : [{
            id : "dept-grid",
            xtype : "deptlist"
        }]
    }]
});