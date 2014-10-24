/**
 * @author zj
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled : true
    });

    Ext.application({
        name : "outline",
        appFolder : ".",
        launch : function() {
            Ext.create("Ext.container.Viewport", {
                layout : "border",
                items : [{
                    //title: '上面north',
                    region: 'north',
                    height: 82,
                    margins: '5 0 0 0',
                    autoLoad : {
                        url:"top.html",
                        scripts:true
                    }
                }, {
                    title: '<div style="text-align: center">©广州金越软件技术有限公司2012-2014</div>',
                    region: 'south',
                    height: 27,
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
            'AppController'
        ]
    });
});