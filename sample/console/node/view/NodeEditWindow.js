/**
 * Created by zj on 13-12-15.
 */
Ext.define("node.view.NodeEditWindow", {
	id : "esb_NodeEditWindow",
    extend : "Ext.window.Window",
    alias : "widget.nodeeditwindow",
    title : "编辑节点",
    width : 400,
    height : 280,
    padding : 5,
    resizable : false,
    items : [{
        xtype: "form",
        url: 'edit.do', //提交地址
        defaultType: 'textfield',
        frame: true,
        layout:'form',
        items : [{
            xtype : "fieldset",
            title: '节点信息',
            collapsed: false, //
            layout:'form',
            frame: true,
            defaults : {
                labelWidth : 80
            },
            items : [{
                xtype : 'hiddenfield',
                name: 'parent.id',
                allowBlank: true
            }, {
                xtype : 'textfield',
                fieldLabel: '名称:',
                name: 'name',
                allowBlank: false,
                labelAlign : "right",
                selectOnFocus:true
            }, {
                xtype : 'textfield',
                fieldLabel: '编码:',
                name: 'code',
                allowBlank: false,
                labelAlign : "right"
            }, {
                xtype : 'textfield',
                fieldLabel: 'IP:',
                name: 'ip',
                allowBlank: false,
                labelAlign : "right"
            }, {
                xtype : 'textfield',
                fieldLabel: '端口号:',
                name: 'port',
                allowBlank: true,
                labelAlign : "right"
            }, {
                xtype : 'textfield',
                fieldLabel: '描述:',
                name: 'desc',
                allowBlank: false,
                labelAlign : "right"
            }, {
                xtype : 'textfield',
                fieldLabel: 'JMX连接地址:',
                name: 'jmxUrl',
                allowBlank: false,
                labelAlign : "right"
            }]
        }],

        bbar : [{
            xtype : "button",
            text : "确认修改",
            margin : "0 0 0 135"
        }, {
            xtype : "button",
            text : "取消"
        }]
    }]

});