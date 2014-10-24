/**
 * Created by zj on 13-12-16.
 */
Ext.define("dispatch.store.RecentContactStore", {
    extend : 'Ext.data.Store',
    model : "dispatch.model.RecentContact",
    proxy : {
        type :'ajax',
        url : "/ext4/sample/dispatch/data/RecentContact.json",
        reader:{
            type:'json',
            root:'items'
        }
    },
    autoLoad : true
});