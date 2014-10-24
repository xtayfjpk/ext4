/**
 * Created by zj on 13-12-18.
 */
Ext.define("send.view.UploadFormPanel", {
    extend : "Ext.form.Panel",
    alias : "widget.uploadformpanel",
    columnWidth : 0.8,
    layout:"form",
    frame:true,
    //表单字段的默认配置
    defaults:{
        labelAlign:"right",
        labelWidth:55
    },
    items:[{
        id : "dzgw_uploadForm_receiver",
        xtype:"textfield",
        fieldLabel:"收件人",
        name:"receiver.username",//该字段只是显示用，收件人ID由隐藏字段传递到后台
        allowBlank:false,
        selectOnFocus:true,
        readOnly : true
    }, {
        xtype:"textfield",
        fieldLabel:"标题",
        name:"title",
        allowBlank:false
    }, {
        xtype:"htmleditor",
        fieldLabel:"正文",
        height:300,
        name:"content",
        fontFamilies:["宋体", "仿宋", "黑体", "华文行楷", "Arial", "Courier New", "Tahoma", "Times New Roman", "Verdana"],
        defaultFont:"宋体"
    }, {
        xtype : "attachmentlistgrid"
    }],
    tbar : [{
        xtype : "button",
        text : "通讯录中选择收件人"
    }, "-", {
        xtype : "button",
        text : "清空收件人"
    }, "-", {
        xtype : "button",
        text : "发送"
    }]

});