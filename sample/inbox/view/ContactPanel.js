/**
 * Created by zj on 13-12-24.
 */
Ext.define("inbox.view.ContactPanel", {
    extend : "Ext.tree.Panel",
    alias : "widget.contactpanel",
    store : "DeptTreeStore",
    rootVisible : false,
    bbar : ["->","-",{
        xtype : "button",
        text : "取消",
        handler : function() {
            this.ownerCt.ownerCt.ownerCt.hide();
        }
    }, "-", {
        xtype : "button",
        text : "添加到收件人"
    }]
});