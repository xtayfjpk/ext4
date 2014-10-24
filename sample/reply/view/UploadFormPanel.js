/**
 * Created by zj on 13-12-18.
 */
Ext.define("reply.view.UploadFormPanel", {
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
        xtype:"textarea",
        fieldLabel:"正文",
        height:300,
        name:"content"
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