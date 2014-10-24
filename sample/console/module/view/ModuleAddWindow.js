/**
 * Created by zj on 13-12-15.
 */
Ext.define("module.view.ModuleAddWindow", {
    extend : "Ext.window.Window",
    alias : "widget.moduleaddwindow",
    title : "添加模块",
    width : 300,
    height : 250,
    padding : 5,
    items : [{
        xtype: "form",
        url: 'http://www.baidu.com', //提交地址
        defaultType: 'textfield',
        frame: true,
        layout:'form',
        items : [{
            xtype : "fieldset",
            title: '模块信息',
            collapsed: false, //
            layout:'form',
            frame: true,
            defaults : {
                labelWidth : 60
            },
            items : [{
                xtype : 'textfield',
                fieldLabel: '名称:',
                name: 'name',
                allowBlank: false,
                labelAlign : "right",

                selectOnFocus:true
            }, {
                xtype : 'textfield',
                fieldLabel: '地址:',
                name: 'url',
                allowBlank: false,
                labelAlign : "right"
            }, {
                xtype : 'textfield',
                fieldLabel: '权重:',
                name: 'weight',
                allowBlank: false,
                labelAlign : "right"
            }, {
                xtype : 'combobox',
                fieldLabel: '是否启用:',
                name: 'enabled',
                allowBlank: false,
                labelAlign : "right",
                value : true,
                store: Ext.create('Ext.data.Store', {
                    fields: ['display', 'data'],
                    data : [
                        {"display":"启用", "data":true},
                        {"display":"禁用", "data":false}
                    ]
                }),
                queryMode: 'local',
                displayField: 'display',
                valueField: 'data'
            }, {
                xtype : 'combobox',
                fieldLabel: '是否全局:',
                name: 'global',
                allowBlank: false,
                labelAlign : "right",
                value : true,
                store: Ext.create('Ext.data.Store', {
                    fields: ['display', 'data'],
                    data : [
                        {"display":"是", "data":true},
                        {"display":"否", "data":false}
                    ]
                }),
                queryMode: 'local',
                displayField: 'display',
                valueField: 'data'
            }]
        }],

        bbar : [{
            xtype : "button",
            text : "添加",
            margin : "0 0 0 95"
        }, {
            xtype : "button",
            text : "取消"
        }]
    }]

});