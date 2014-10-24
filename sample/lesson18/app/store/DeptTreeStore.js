/**
 * Created by zj on 13-12-14.
 */
Ext.define("AM.store.DeptTreeStore", {
    extend : "Ext.data.TreeStore",
    defaultRootId : "root",
    proxy : {
        type : "ajax",
        url : "data/DeptTree.json",
        reader : "json"
    },
    autoLoad : true
});