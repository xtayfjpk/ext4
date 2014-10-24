/**
 * Created by zj on 13-12-10.
 */
Ext.onReady(function(){
    Ext.QuickTips.init();

    Ext.Loader.setConfig({
        enabled:true
    });

    Ext.application({
        name:'AM',
        appFolder:'/ext4/sample/lesson16/app',
        launch:function(){
            Ext.create('Ext.container.Viewport', {
                layout:'auto',
                items:[{
                    xtype:'deptview'
                }]
            })
        },
        controllers:[
            'DeptController'
        ]
    })
});