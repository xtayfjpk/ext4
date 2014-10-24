/**
 * Created by zj on 13-12-16.
 */
Ext.define("share.store.DeptTreeStore", {
    extend : 'Ext.data.TreeStore',
    defaultRootId : 'root',
    nodeParam : "id",
    proxy : {
        type : 'ajax',
        url : "/ext4/sample/send/data/Dept.json",
        reader : 'json'
    },
    autoLoad : true
});