/**
 * Created by zj on 13-12-10.
 */
//User的数据集合
Ext.define('AM.store.UserStore', {
    extend:"Ext.data.Store",
    //storeId:'s_user',
    model:'AM.model.User',
    proxy:{
        type:'ajax',
        url:'/ext4/sample/lesson13/app/data/users.json',
        reader:{
            type:'json',
            root:'items'
        },
        writer:{
            type:'json'
        }
    },
    autoLoad:true
});