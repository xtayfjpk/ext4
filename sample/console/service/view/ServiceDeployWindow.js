/**
 * Created by zj on 13-12-15.
 */
Ext.define("service.view.ServiceDeployWindow", {
    extend : "Ext.window.Window",
    alias : "widget.servicedeploywindow",
    id: "esb_servicedeploywindow",
    title : "发布服务",
    width : 350,
    height : 120,
    padding : 5,
    items : [{
        xtype: "form",
        url: 'http://www.baidu.com', //提交地址
        defaultType: 'textfield',
        frame: true,
        layout:'form',
        items : [{
            xtype : "filefield",
            name : "serviceDefinition",
            buttonText : '浏览...'
        }, {
            xtype : 'container',
            html : '多个文件请打包成zip格式发布'
        }],

        bbar : [{
            xtype : "button",
            text : "发布",
            margin : "0 0 0 95"
        }, {
            xtype : "button",
            text : "取消"
        }]
    }]

});