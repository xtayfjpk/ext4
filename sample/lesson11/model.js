/**
 * Created by zj on 13-12-10.
 */
//定义一个User类
Ext.define('User', {
    extend:'Ext.data.Model',
    fields:[{
        name:'name',
        type:'string',
        sortable:true
    }, {
        name:'age',
        type:'int',
        sortable:true
    }, {
        name:'email',
        type:'string',
        sortable:true
    }]
});

//var user = Ext.create('User', {});

Ext.create('Ext.data.Store', {
    storeId:'userStore',
    model:'User',
    proxy:{
        type:'ajax',
        url:'/ext4/sample/lesson11/users.json',
        reader:{
            type:'json',
            root:'items'
        },
        writer:{
            type:'json'
        }
    },
    autoLoad:true
    //pageSize:1
});