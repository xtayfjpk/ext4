/**
 * Created by zj on 13-12-16.
 */
Ext.define('reply.controller.RecentContactController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({

        });
    },

    views:["RecentContactGrid", "ReplyPanel"],
    stores:["RecentContactStore"],
    models:["RecentContact"]
});