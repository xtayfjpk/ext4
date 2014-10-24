/**
 * Created by zj on 13-12-16.
 */
Ext.define("inbox.view.InboxPanel", {
    extend : "Ext.panel.Panel",
    alias : "widget.inboxpanel",
    width : 1100,
    //title : "收件箱",

    items : [{
        xtype : "headerpanel"
    }, {
        xtype : "receivedocgrid"
    }]
});