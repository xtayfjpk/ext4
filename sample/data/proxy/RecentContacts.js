/**
 * Created by zj on 13-12-11.
 */
Ext.onReady(function(){
    Ext.create("Ext.grid.Panel", {
        title:"最近联系人",
        width:700,
        renderTo:Ext.getBody(),
        columns:[{
            xtype:'rownumberer'
        }, {
            text:'用户名',
            dataIndex:'username',
            width:200
        }, {
            text:'显示名',
            dataIndex:'viewName',
            width:200
        }, {
            text:'部门',
            dataIndex:'department',
            width:200
        }],
        store: Ext.create("Ext.data.Store", {
            storeId:"RecentContactStore",
            model : "RecentContact"
        }),
        tbar : [{
            xtype : "button",
            text: "增加",
            id : "dzgw_add",
            handler:function() {
                //alert(this.text);
                var store = Ext.data.StoreManager.lookup("RecentContactStore");
                store.add({
                    "id" : 1,
                    "username" : "tianqi",
                    "viewName" : "田七",
                    "department" : "品质部"
                });
                store.sync();
            }
        }, {
            xtype : "button",
            text: "查看",
            id : "dzgw_view",
            handler:function() {
                alert(this.text);
                var store = Ext.data.StoreManager.lookup("RecentContactStore");
                store.load();
                store.each(function(_model){
                    alert(_model.get('viewName'));
                });
            }
        }]
    });
});