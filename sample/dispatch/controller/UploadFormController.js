/**
 * Created by zj on 13-12-16.
 */
Ext.define('dispatch.controller.UploadFormController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            "uploadformpanel" : {
                "render" : function(_button) {
                    CKEDITOR.replace("content", {
                        skin : "Moono_blue",
                        language : "zh-cn"
                    })
                }
            },
            "uploadformpanel button[text=通讯录中选择收件人]" : {
                "click" : function(_button) {
                    var receiverSelectWindow = Ext.getCmp("dzgw_receiver_select_window");
                    if(!receiverSelectWindow) {
                      receiverSelectWindow = Ext.create("dispatch.view.ReceiverSelectWindow");
                    }
                    receiverSelectWindow.show();
                }
            }
        });
    },

    views:['UploadFormPanel', "AttachmentListGrid"],
    stores:["AttachmentStore"],
    models:['Attachment']
});