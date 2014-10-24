/**
 * Created by zj on 13-12-11.
 */
Ext.define('dzgw.model.RecentContact', {
    extend:'Ext.data.Model',
    fields:[{
        name:'id',
        type:'int',
        sortable:true
    }, {
        name:'username',
        type:'string',
        sortable:true
    }, {
        name:'viewName',
        type:'string',
        sortable:true
    }, {
        name:'department',
        type:'string',
        sortable:true
    }]
});