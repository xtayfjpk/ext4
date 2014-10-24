/**
 * Created by zj on 13-12-16.
 *
 */
Ext.define("reply.model.RecentContact", {
    extend : "Ext.data.Model",
    fields:[{
        name:'id',
        type:'int'
    }, {
        name:'username',
        type:'string'
    }, {
        name:'viewName',
        type:'string'
    }, {
        name:'department',
        type:'string'
    }]
});
