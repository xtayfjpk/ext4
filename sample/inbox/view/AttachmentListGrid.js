/**
 * Created by zj on 13-12-18.
 */
Ext.define("inbox.view.AttachmentListGrid", {
    extend : "Ext.grid.Panel",
    alias : "widget.attachmentlistgrid",
    title : "附件(5)个",
    height : 180,
    frame : true,
    margin : "10 0 0 0",
    columnLines : true,
    columns : [{
        xtype : "rownumberer"
    }, {
        text : "文件名称",
        flex : 4,
        sortable : false,
        menuDisabled : true,
        align : "center",
        dataIndex : "filename"
    }, {
        text : "文件大小(Kb)",
        sortable : false,
        menuDisabled : true,
        align : "center",
        dataIndex : "size"
    }, {
        xtype : "actioncolumn",
        text : "下载",
        icon : "download.gif",
        sortable : false,
        menuDisabled : true,
        align : "center",
        tdCls : "hand"
    }],
    bbar : [{
        xtype : "button",
        html : "<b><<返回</b>",
        width : 80,
        align : "center"
    }, "-", {
        xtype : "button",
        text : "<b>回复</b>",
        width : 80
    }, "-", {
        xtype : "button",
        text : "<b>转发</b>",
        width : 80
    }, "-", {
        xtype : "button",
        text : "<b>删除</b>",
        width : 80
    }],
    store : Ext.create('Ext.data.Store', {
        fields : ["filename", "size"],
        data : [
            {filename: 'xsxkdjf.doc', size: '15'},
            {filename: 'xsxkdjf.doc', size: '15'},
            {filename: 'xsxkdjf.doc', size: '15'}
        ]
    })
});