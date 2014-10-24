/**
 * Created by zj on 13-12-16.
 */
Ext.define('send.controller.ReceiverSelectController', {
    extend:'Ext.app.Controller',

    refs : [{
        ref : 'xxx',
        selector : 'contacttreepanel'
    }, {
        ref : 'yyy',
        selector : 'contacttreepanel'
    }],

    init:function(){
        this.control({
            "contacttreepanel button[text=取消]" : {
                "click" : function(_button) {
                    alert(_button.text);
                }
            }
        });
    },

    views:[],
    stores:[],
    models:[]
});