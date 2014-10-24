/**
 * Created by zj on 13-12-14.
 */
Ext.define("AM.util.GridDoActionUtil", {
    /**
     * 树形维护表格的插入操作
     * @param _grid
     * @param _addObj
     * @param _tree
     */
    doInsert : function(_grid, _addObj, _tree) {
        if(!(_grid && _addObj)) {
            alert("参数传递不正确");
            return;
        }
        var store = _grid.getStore();
        var storeCount = store.getCount();
        //得到编辑插件
        var editing = _grid.editing;
        //得到数据模型
        var model = store.model;//返回的是model的构造器
        if(storeCount==0) {
            var dept = new model(_addObj);
            editing.cancelEdit();//取当前所有激活的编辑活动
            store.insert(0, dept);
            editing.startEditByPosition({
                row : 0, column : 1
            });

            if(_tree) {
                var rootNode = _tree.getStore().getRootNode();
                rootNode.appendChild({
                    id : _addObj["id"],
                    text : _addObj["text"],
                    leaf : _addObj["leaf"]
                });
            }
        } else {
            //得到被选择的数据集合
            var checkedRecords = _grid.getSelectionModel().getSelection();
            if(checkedRecords.length==1) {
                var parentRecord = checkedRecords[0];
                _addObj["nodeType"] = "GENERAL";
                editing.cancelEdit();//取当前所有激活的编辑活动
                var dept = new model(_addObj);
                store.insert(0, dept);
                editing.startEditByPosition({
                    row : 0, column : 1
                });
            } else {
                alert("你必须选择且只能选择一个部门");
            }
        }

    },

    doSave : function(_grid, _addObj, _tree) {

    }
});