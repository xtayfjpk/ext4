/**
 * Created by zj on 13-12-14.
 */
Ext.define("AM.view.DeptTree", {
    extend : "Ext.tree.Panel",
    alias : "widget.depttree",
    rootVisible : false,//不展示根节点
    displayField : "text",
    animate : false,
    store : "DeptTreeStore"
});