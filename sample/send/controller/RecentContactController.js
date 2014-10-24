/**
 * Created by zj on 13-12-16.
 */
Ext.define('send.controller.RecentContactController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({

        });
    },

    views:["RecentContactGrid"],
    stores:["RecentContactStore"],
    models:["RecentContact"]
});