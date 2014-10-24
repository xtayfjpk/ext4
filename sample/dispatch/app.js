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
        name : "dispatch",
        appFolder : "/ext4/sample/dispatch",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                items : [{
                    xtype : "dispatchpanel"
                }]
            });
        },
        controllers : [
            "UploadFormController", "RecentContactController", "ReceiverSelectController"
        ]
    });
});