/**
 * Created by zj on 13-12-16.
 */
Ext.define('inbox.controller.ReceiveDocController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            "receivedocgrid button[text=删除]" : {
                //响应删除按钮的单击事件
                "click" : function(_button) {
                    //this指向的就是当前controller
                    //this.deleteDoc();
                    var grid = _button.ownerCt.ownerCt;
                    var store = grid.getStore();
                    var selections = grid.getSelectionModel().getSelection();
                    store.remove(selections);
                }
            },
            "receivedocgrid button[text=搜索]" : {
                //响应搜索按钮的单击事件
                "click" : function(_button) {
                    alert(_button.text);
                }
            },
            "receivedocgrid actioncolumn[text=删除]" : {
                //响应搜索按钮的单击事件
                "click" : function(_grid, _el, _rowIndex, _columnIndex, _event) {
                    alert(_rowIndex);
                }
            },
            "receivedocgrid gridcolumn[text=查看材料明细]" : {
                "click" : function(_grid, _el, _rowIndex, _columnIndex, _event) {

                    Ext.create("inbox.view.DocDetailWindow").show();
                    var model = _grid.getStore().getAt(_rowIndex);
                    var detailPanel = Ext.ComponentQuery.query("docdetailwindow docdetailpanel")[0];
                    detailPanel.getForm().loadRecord(model);
                }
            },
            "docdetailwindow" : {
                "resize" : function() {
                    //alert("resize");
                }
            },
            "docdetailpanel button[id=detail_panel_dispatcher]" :  {
                "click" : function(_button) {
                    Ext.create("inbox.view.ContactWindow").show();
                }
            }
        });
    },
    deleteDoc : function() {
        alert("deleteDoc");
    },
    views:['ReceiveDocGrid', "InboxPanel", "HeaderPanel"],
    stores:['ReceiveDocStore', "DeptTreeStore"],
    models:['ReceiveDoc']
});