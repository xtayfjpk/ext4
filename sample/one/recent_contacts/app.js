/**
 * Created by zj on 13-12-10.
 */
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled:true
    });

    Ext.application({
        name:'dzgw',
        appFolder:'.',
        launch:function(){
            Ext.create('Ext.container.Viewport', {
                layout:'auto',
                items:[{
                    xtype:'recentcontactview'
                }]
            })
        },
        controllers:[
            'RecentContactController'
        ]
    })
});