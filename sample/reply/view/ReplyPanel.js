/**
 * Created by zj on 13-12-26.
 */
Ext.define("reply.view.ReplyPanel", {
    extend : "Ext.form.Panel",
    alias : "widget.replypanel",
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