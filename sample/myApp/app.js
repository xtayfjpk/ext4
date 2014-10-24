/**
 * Created by zj on 13-12-12.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });

    Ext.application({
        name : "kingyea",
        appFolder : ".",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "border",
                items : [{
                    //title: '上面north',
                    region: 'north',
                    height: 30,
                    margins: '5 0 0 0'
                }, {
                    //title: '下面south',
                    region: 'south',
                    height: 30,
                    minSize: 75,
                    maxSize: 250,
                    margins: '5 0 0 0'
                }, {
                    width : 200,
                    height : 600,
                    xtype : "menutree",
                    region : "west"
                }, {
                    //title: '中间Content',
                    collapsible: false,
                    region:'center',
                    xtype : "centertab"
                }]
            });
        },
        controllers : [
            "AppController"
        ]
    });
});