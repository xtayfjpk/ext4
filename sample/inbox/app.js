/**
 * Created by zj on 13-12-12.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });
    Ext.Loader.setPath({
        "inbox.column" : "/ext4/sample/inbox/column"
    });
    Ext.require(["inbox.column.NumberConditionColumn"]);

    Ext.application({
        name : "inbox",
        appFolder : "/ext4/sample/inbox",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "auto",
                items : [{
                    xtype : "inboxpanel"
                }]
            });
        },
        controllers : [
            "ReceiveDocController"
        ]
    });
});