/**
 * Created by zj on 13-12-16.
 */
Ext.define("inbox.store.ReceiveDocStore", {
    extend : 'Ext.data.Store',
    model : "inbox.model.ReceiveDoc",
    proxy : {
        type : 'ajax',
        url : '/ext4/sample/inbox/data/ReceiveDoc.json',
        reader : {
            type : 'json',
            root : "items"
        }
    },
    autoLoad : true,
    pageSize : 10
});