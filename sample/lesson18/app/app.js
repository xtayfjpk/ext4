/**
 * Created by zj on 13-12-12.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });

    Ext.application({
        name : "AM",
        appFolder : ".",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "auto",
                items : [{
                    width : 1000,
                    height : 600,
                    xtype : "mainlayout"
                }]
            });
        },
        controllers : [
            "DeptController"
        ]
    });
});