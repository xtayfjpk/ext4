/**
 * Created by zj on 13-12-24.
 */
Ext.define("inbox.view.ContactWindow", {
    extend : "Ext.window.Window",
    alias : "widget.contactwindow",
    closeAction : "hide",
    title : "选择收件人",
    width : 400,
    height : 400,
    autoScroll : true,
    //resizable : false,
    layout : "fit",
    items : [Ext.create("inbox.view.ContactPanel")]
});