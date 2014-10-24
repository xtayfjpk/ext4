/**
 * Created by zj on 13-12-15.
 */
Ext.define("outline.view.MenuTree", {
    extend : "Ext.tree.Panel",
    alias : "widget.menutree",
    title : "功能列表",
    width : 300,
    height :200,
    rootVisible : false,
    store : "MenuStore"
});