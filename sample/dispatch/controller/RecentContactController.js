/**
 * Created by zj on 13-12-16.
 */
Ext.define('dispatch.controller.RecentContactController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({

        });
    },

    views:["RecentContactGrid", "DispatchPanel"],
    stores:["RecentContactStore"],
    models:["RecentContact"]
});