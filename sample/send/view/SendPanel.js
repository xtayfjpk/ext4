/**
 * Created by zj on 13-12-26.
 */
Ext.define("send.view.SendPanel", {
    extend : "Ext.form.Panel",
    alias : "widget.sendpanel",
    layout:"column",
    autoScroll : true,
    height : 600,
    //frame:true,
    items : [{
        xtype : "uploadformpanel"
    }, {
        xtype : "recentcontactgrid"
    }],
    listeners : {
        "render" : function(_panel) {
            _panel.setHeight(document.body.clientHeight);
        }
    }
});