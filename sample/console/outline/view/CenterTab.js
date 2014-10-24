/**
 * Created by zj on 13-12-15.
 */
Ext.define("outline.view.CenterTab", {
    id : "esb_centerTab",
    extend : "Ext.tab.Panel",
    alias : "widget.centertab",
    loadMask:{
        msg : '正在加载表格数据,请稍等...'
    },
    items : [{
        xtype : "panel",
        title : "我是首页",
        html : "中华人民共和国"
    }]
});