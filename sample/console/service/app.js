/**
 * Created by zj on 14-10-24.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });

    Ext.application({
        name : "service",
        appFolder : ".",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "border",
                items : [{
                    xtype : "servicelistpanel"
                }]
            });
        },
        controllers : [
            'ServiceController'
        ]
    });
});