/**
 * Created by zj on 13-12-15.
 */
Ext.define("node.view.NodeAddWindow", {
	id : "esb_NodeAddWindow",
    extend : "Ext.window.Window",
    alias : "widget.nodeaddwindow",
    title : "添加节点",
    width : 500,
    height : 280,
    padding : 5,
    resizable : false,
    items : [{
        xtype: "form",
        url: 'add.do', //提交地址
        frame: true,
        layout:'form',
        items : [{
            xtype : "container",
            layout : "column",
            frame : true,
            items : [{
                xtype : 'textfield',
                fieldLabel: '名称:',
                name: 'name',
                allowBlank: false,
                labelAlign : "right",
                selectOnFocus:true,
                columnWidth:0.5,
                labelWidth: 50,
                regex:/^[\w@\.\u4E00-\u9FA5]+$/,
                regexText:'必须是汉字、字母、数字、下划线、@、.组成'
            }, {
                xtype : 'textfield',
                fieldLabel: '编码:',
                name: 'code',
                allowBlank: false,
                labelAlign : "right",
                columnWidth:0.5,
                labelWidth: 50
            }]
        }, {
            xtype : "container",
            layout : "column",
            frame : true,
            items : [{
                xtype : 'textfield',
                fieldLabel: 'IP:',
                name: 'ip',
                allowBlank: false,
                labelAlign : "right",
                columnWidth:0.5,
                labelWidth: 50,
                regex:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
                regexText:'必须是合法的IP地址'
            }, {
                xtype : 'textfield',
                fieldLabel: '描述:',
                name: 'desc',
                allowBlank: false,
                labelAlign : "right",
                columnWidth:0.5,
                labelWidth: 50
            }]
        }, {
            xtype : "fieldset",
            title: 'JMX连接信息',
            collapsed: false, //
            layout:'form',
            frame: true,
            defaults : {
                labelWidth : 50
            },
            items : [{
                xtype : "container",
                layout : "column",
                frame : true,
                items : [{
                    xtype : 'textfield',
                    fieldLabel: 'JMX连接地址:',
                    name: 'jmxUrl',
                    allowBlank: false,
                    labelAlign : "right",
                    columnWidth: 1
                }]
            }, {
                xtype : "container",
                layout : "column",
                frame : true,
                items : [{
                    xtype: 'textfield',
                    name: 'jmxUser',
                    fieldLabel: 'JMX连接用户名',
                    labelAlign: 'right',
                    regex:/^[\w@\.]+$/,
                    regexText:'必须是字母、数字、下划线、@、.组成',
                    columnWidth: .5
                }, {
                    xtype: 'textfield',
                    name: 'jmxPwd',
                    fieldLabel: 'JMX连接密码',
                    regex:/^[\w@\.]+$/,
                    regexText:'必须是字母、数字、下划线、@、.组成',
                    labelAlign: 'right',
                    columnWidth: .5
                }]
            }]
        }],

        bbar : [{
            xtype : "button",
            text : "添加",
            margin : "0 0 0 170"
        }, {
            xtype : "button",
            text : "取消"
        }]
    }]

});