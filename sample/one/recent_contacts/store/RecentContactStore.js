/**
 * Created by zj on 13-12-11.
 */
Ext.define('dzgw.store.RecentContactStore', {
    extend:"Ext.data.Store",
    model:'dzgw.model.RecentContact',
    proxy:{
        type:'ajax',
        url:'data/RecentContacts.json',
        reader:{
            type:'json',
            root:'items'
        },
        writer:{
            type:'json'
        }

        //type:'localstorage',
        //id:'dzgw-Recent-Contact'
    },
    autoLoad:true
});