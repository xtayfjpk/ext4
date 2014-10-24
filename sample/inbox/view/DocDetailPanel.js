/**
 * Created by zj on 13-12-18.
 */
Ext.define("inbox.view.DocDetailPanel", {
    extend : "Ext.form.Panel",
    alias : "widget.docdetailpanel",
    frame : true,
    items : [{
        xtype : "textfield",
        fieldLabel : "标题",
        name : "title",
        padding : "5 0 0 5",
        labelWidth : 100,
        width : 750,
        readOnly : true
    }, {
        xtype : "textfield",
        fieldLabel : "发件人",
        name : "sender",
        padding : "5 0 0 5",
        labelWidth : 100,
        width : 750,
        readOnly : true
    }, {
        xtype : "textfield",
        fieldLabel : "时间",
        name : "sendTime",
        padding : "5 0 0 5",
        labelWidth : 100,
        width : 750,
        readOnly : true
    }/*, {
        xtype : "textfield",
        fieldLabel : "收件人",
        name : "receiver",
        padding : "5 0 0 5",
        labelWidth : 100,
        width : 750,
        readOnly : true
    }*/, {
        xtype : "displayfield",
        fieldLabel : "正文",
        padding : "5 0 0 5",
        labelWidth : 100,
        width : 750
    }, {
        xtype : "htmleditor",
        name : "content",
        padding : "5 0 0 5",
        height : 150,
        width : 755,
        readOnly : true,
        value : "中华人民共和国"
    }],
    tbar : [{
        xtype : "button",
        html : "<b><<返回</b>",
        width : 80
    }, "-", {
        xtype : "button",
        text : "<b>回复</b>",
        width : 80
    }, "-", {
        id : "detail_panel_dispatcher",
        xtype : "button",
        text : "<b>转发</b>",
        width : 80
    }, "-", {
        xtype : "button",
        text : "<b>删除</b>",
        width : 80
    }]
});