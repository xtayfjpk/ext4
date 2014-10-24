/**
 * Created by zj on 13-12-16.
 */
Ext.define("inbox.store.DeptTreeStore", {
    extend : 'Ext.data.TreeStore',
    defaultRootId : 'root',
    nodeParam : "id",
    proxy : {
        type : 'ajax',
        url : 'data/Dept.json',
        reader : 'json'
    },
    autoLoad : true
});