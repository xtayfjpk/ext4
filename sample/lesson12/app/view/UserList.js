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
        text:'name',
        dataIndex:'name',
        width:100
    }, {
        text:'age',
        dataIndex:'age',
        width:100
    }, {
        text:'email',
        dataIndex:'email',
        width:350,
        editor:'textfield'
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