/**
 * Created by zj on 13-12-16.
 */
Ext.define("reply.store.RecentContactStore", {
    extend : 'Ext.data.Store',
    model : "reply.model.RecentContact",
    proxy : {
        type :'ajax',
        url : "/ext4/sample/reply/data/RecentContact.json",
        reader:{
            type:'json',
            root:'items'
        }
    },
    autoLoad : true
});