/**
 * Created by zj on 13-12-11.
 */
Ext.define('dzgw.controller.RecentContactController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            "recentcontactview button[id=dzgw_add]" : {
                "click" : function(_button) {
                    //this指向的是RecentContactController
                    var store = _button.ownerCt.ownerCt.getStore();
                    store.load();
                    store.add({
                        "id" : 1,
                        "username" : "tianqi",
                        "viewName" : "田七",
                        "department" : "品质部"
                    });
                    store.sync();
                }
            },
            "recentcontactview button[id=dzgw_view]" : {
                "click" : function(_button) {
                    alert(_button.text);
                    var store = _button.ownerCt.ownerCt.getStore();
                    store.load();
                    store.each(function(_model){
                        alert(_model.get('viewName'));
                    });
                }
            },
            "recentcontactview" : {
                "show" : function(_view) {
                    alert(_view);
                }
            }
        });
    },
    views:['RecentContactView'],
    stores:['RecentContactStore'],
    models:['RecentContact']
});