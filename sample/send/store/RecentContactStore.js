/**
 * Created by zj on 13-12-16.
 */
Ext.define("send.store.RecentContactStore", {
    extend : 'Ext.data.Store',
    model : "send.model.RecentContact",
    proxy : {
        type :'ajax',
        url : "/ext4/sample/send/data/RecentContact.json",
        reader:{
            type:'json',
            root:'items'
        }
    },
    autoLoad : true
});