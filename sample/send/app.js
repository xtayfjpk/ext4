/**
 * Created by zj on 13-12-12.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });
    Ext.Loader.setPath({
        "share" : "/ext4/sample/share"
    });

    //Ext.require(["share.view.ContactTreePanel"]);
    //Ext.require(["share.store.DeptTreeStore"]);

    Ext.application({
        name : "send",
        appFolder : "/ext4/sample/send",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                items : [{
                    xtype : "sendpanel"
                }]
            });
        },
        controllers : [
            "UploadFormController", "RecentContactController", "ReceiverSelectController"
        ]
    });
});