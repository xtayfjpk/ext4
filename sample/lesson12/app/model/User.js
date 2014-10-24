/**
 * Created by zj on 13-12-10.
 */
Ext.define('AM.model.User', {
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