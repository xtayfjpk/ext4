/**
 * @author zj
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });
    //Ext.require('node.store.NodeStore');

    Ext.application({
        name : "node",
        appFolder : ".",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "border",
                items : [{
                    xtype : "nodelistpanel"
                }]
            });
        },
        controllers : [
            'NodeController'
        ]
    });
});