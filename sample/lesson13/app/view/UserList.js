/**
 * Created by zj on 13-12-10.
 */
Ext.define('AM.view.UserList', {
    extend:'Ext.grid.Panel',
    alias:'widget.userlist',
    title:'Grid MVC Demo',
    frame:true,
    width:600,
    height:300,
    columns:[{
        xtype:'rownumberer'
    }, {
        text:'name',
        dataIndex:'name',
        width:100
    }, {
        text:'sex',
        dataIndex:'sex',
        width:50,
        renderer:function(_value) {
            if(_value) {
                if(_value=='男') {
                    return '<font color="red">男</font>';
                } else {
                    return '<font color="green">女</font>';
                }
            }
        }
    },{
        text:'age',
        dataIndex:'age',
        width:100
    }, {
        text:'email',
        dataIndex:'email',
        width:200,
        editor:'textfield'
    }, {
        id:'edit',
        text:'Action',
        width:50,
        xtype:'actioncolumn',
        //icon:'/ext4/sample/lesson13/icon_edit.gif'
        icon:'app/view/image/icon_edit.gif'//相对于html文件位置
    }, {
        text:'描述',
        width:200,
        xtype:'templatecolumn',
        tpl:'姓名是{name},年龄是{age}'
    }],
    //renderTo:Ext.getBody(),
    store:'UserStore',
    tbar:[{
        xtype:'button',
        text:'添加'
    }, "-", {
        xtype:'button',
        text:'删除'
    }, "-", {
        xtype:'button',
        text:'修改',
        icon:'icon_edit.gif'
    }, "-", {
        xtype:'button',
        text:'查看'
    }, "-", {
        xtype:'button',
        text:'保存',
        id:'save'
    }],
    dockedItems:[{
        xtype:'pagingtoolbar',
        dock:'bottom',
        store:'UserStore',
        displayInfo:true,
        pageSize:1
    }],
    selType:'checkboxmodel',//设定选择模式
    multiSelect:true,
    plugins:[
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit:2
        })
    ],
    initComponent:function(){
        this.callParent(arguments);
    }
});