/**
 * Created by zj on 13-12-12.
 * 部门实体数据集合
 */
Ext.define("AM.store.DeptStore", {
    extend : "Ext.data.Store",
    model : "AM.model.Dept",
    proxy : {
        type : "ajax",
        url : "data/Depts.json",
        reader : {
            type : "json",
            root : "items"
        },
        writer : {
            type : "json"
        }
    },
    autoLoad : true
});