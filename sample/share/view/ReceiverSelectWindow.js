/**
 * Created by zj on 13-12-24.
 * 用于选择收件人窗口
 */
Ext.define("share.view.ReceiverSelectWindow", {
    extend : "Ext.window.Window",
    alias : "widget.receiverselectwindow",
    id : "dzgw_receiver_select_window",
    closeAction : "hide",
    title : "选择收件人",
    width : 400,
    height : 350,
    autoScroll : true,
    layout : "fit",
    modal : true,
    /*items : [{
    	xtype : "contacttreepanel"
    }]*/
    items : [Ext.create("share.view.ContactTreePanel")]
});