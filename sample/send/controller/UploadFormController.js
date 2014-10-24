/**
 * Created by zj on 13-12-16.
 */
Ext.define('send.controller.UploadFormController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            "uploadformpanel" : {
                "render" : function(_button) {

                }
            },
            "uploadformpanel button[text=通讯录中选择收件人]" : {
                "click" : function(_button) {
                    var receiverSelectWindow = Ext.getCmp("dzgw_receiver_select_window");
                    if(!receiverSelectWindow) {
                      receiverSelectWindow = Ext.create("share.view.ReceiverSelectWindow");
                    }
                    receiverSelectWindow.show();
                }
            }
        });
    },

    views:['UploadFormPanel', "AttachmentListGrid", "SendPanel"],
    stores:["AttachmentStore"],
    models:['Attachment']
});