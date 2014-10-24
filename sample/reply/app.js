/**
 * Created by zj on 13-12-12.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });
    Ext.Loader.setPath({
    });

    Ext.application({
        name : "reply",
        appFolder : "/ext4/sample/reply",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                items : [{
                    xtype : "replypanel"
                }]
            });
        },
        controllers : [
            "UploadFormController", "RecentContactController", "ReceiverSelectController"
        ]
    });
});