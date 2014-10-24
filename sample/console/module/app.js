/**
 * @author zj
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });

    Ext.application({
        name : "module",
        appFolder : ".",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "border",
                items : [{
                    xtype : "modulelistpanel"
                }]
            });
        },
        controllers : [
            'ModuleController'
        ]
    });
});