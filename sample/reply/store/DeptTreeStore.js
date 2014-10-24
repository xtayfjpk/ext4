/**
 * Created by zj on 13-12-16.
 */
Ext.define("reply.store.DeptTreeStore", {
    extend : 'Ext.data.TreeStore',
    defaultRootId : 'root',
    nodeParam : "id",
    proxy : {
        type : 'ajax',
        url : "/ext4/sample/reply/data/Dept.json",
        reader : 'json'
    },
    autoLoad : true
});