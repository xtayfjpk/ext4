/**
 * Created by zj on 13-12-16.
 */
Ext.define('reply.controller.UploadFormController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            "uploadformpanel" : {
                "render" : function() {
                    CKEDITOR.replace( 'content', {

                    });
                }
            },
            "uploadformpanel button[text=通讯录中选择收件人]" : {
                "click" : function(_button) {
                    var receiverSelectWindow = Ext.getCmp("dzgw_receiver_select_window");
                    if(!receiverSelectWindow) {
                      receiverSelectWindow = Ext.create("reply.view.ReceiverSelectWindow");
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