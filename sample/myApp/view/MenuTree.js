/**
 * Created by zj on 13-12-15.
 */
Ext.define("kingyea.view.MenuTree", {
    extend : "Ext.tree.Panel",
    alias : "widget.menutree",
    title : "系统菜单",
    width : 300,
    height :200,
    rootVisible : false,
    store : "MenuStore"
});