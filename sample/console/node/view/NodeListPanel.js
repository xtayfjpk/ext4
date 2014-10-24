/**
 * Created by zj on 13-12-15.
 */
Ext.define("node.view.NodeListPanel", {
    id : "esb_nodelistpanel",
    extend : "Ext.tree.Panel",
    alias : "widget.nodelistpanel",
    title : "节点管理",
    columnLines : true,
    region: 'center',
    root:{
        id:'root',
        name:'节点管理',
        expanded:true
    },
    columns: [{
        xtype : 'treecolumn',
        header: '节点名称',  dataIndex: 'name', sortable:false,flex:1
    }, {
        header: '节点编码', dataIndex: 'code',align : 'center',sortable:false,width:150
    }, {
        header: '节点IP',  dataIndex: 'ip', align : 'center',sortable:false,width:150
    }, {
        header: '端口号', dataIndex: 'port',align : 'center',sortable:false,width:50
    }, {
        header: '节点描述', dataIndex: 'desc',align : 'center',sortable:false,width:200
    }],
    loadMask:{
        msg : '正在加载数据,请稍等...'
    },
    store : Ext.create('node.store.NodeStore'),
    //store : "NodeStore",
    tbar : [{
        xtype : "button",
        text : "添加节点"
    }, "-", {
        xtype : "button",
        text : "编辑节点"
    }, "-", {
        xtype : "button",
        text : "删除节点"
    }, "-", {
        xtype : "button",
        text : "展开所有节点"
    }, "-", {
        xtype : "button",
        text : "收起所有节点"
    }, "-", {
        xtype : "button",
        text : "刷新节点树"
    }],
    renderTo: Ext.getBody()
});