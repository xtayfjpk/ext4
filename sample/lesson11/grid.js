/**
 * Created by zj on 13-12-10.
 */
(function(){
    Ext.onReady(function(){
        Ext.tip.QuickTipManager.init();

        var grid = Ext.create('Ext.grid.Panel', {
            title:'Grid Demo',
            width:600,
            height:300,
            frame:true,
            //forceFit:true,
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
            renderTo:Ext.getBody(),
            store:Ext.data.StoreManager.lookup('userStore'),
            tbar:[{
                xtype:'button',
                text:'添加',
                handler:function(_button){
                    var grid = _button.findParentByType('gridpanel');
                    var store = grid.getStore();
                    alert(store.getCount());
                }
            }, "-", {
                xtype:'button',
                text:'删除',
                handler:function(_button){
                    var grid = _button.findParentByType('gridpanel');
                    var data = grid.getSelectionModel().getSelection();
                    if(data.length==0) {
                        Ext.Msg.alert('提示','你最少要选择一条数据');
                    }
                }
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
                store:Ext.data.StoreManager.lookup('userStore'),
                displayInfo:true,
                pageSize:1
            }],
            selType:'checkboxmodel',//设定选择模式
            multiSelect:true,
            plugins:[
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit:2
                })
            ]
        });
    });
})();