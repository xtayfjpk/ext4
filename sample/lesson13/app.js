/**
 * Created by zj on 13-12-10.
 */
Ext.onReady(function(){

    Ext.QuickTips.init();
    Ext.Loader.setConfig({
        enable:true
    });


    Ext.application({
        name:'AM',//应用名
        appFolder:'app',//设置应用目录
        launch:function(){//当前页面加载完成执行的函数
            Ext.create('Ext.container.Viewport', {
                layout:'auto',
                items:[{
                    xtype:'userlist',
                    html:'List for users will to here'
                }]
            });
        },
        controllers:['UserController']
    });
});