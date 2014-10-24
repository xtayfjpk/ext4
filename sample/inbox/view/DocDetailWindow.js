/**
 * Created by zj on 13-12-18.
 */
Ext.define("inbox.view.DocDetailWindow", {
    extend : "Ext.window.Window",
    alias : "widget.docdetailwindow",
    closeAction : "hide",
    title : "材料明细",
    width : 800,
    height : 400,
    autoScroll : true,
    resizable : false,
    items : [Ext.create("inbox.view.DocDetailPanel"), Ext.create("inbox.view.AttachmentListGrid")]
});