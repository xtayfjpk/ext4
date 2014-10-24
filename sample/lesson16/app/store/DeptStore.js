/**
 * Created by zj on 13-12-11.
 */
Ext.define("AM.store.DeptStore", {
    extend : 'Ext.data.TreeStore',
    defaultRootId : 'root',
    //model : "AM.model.Dept",
    nodeParam : "id",
    proxy : {
        type : 'ajax',
        url : '/ext4/sample/lesson16/app/data/Dept.json',
        reader : 'json',
        autoLoad : true
    },
    fields : [{
        name: 'id',
        type: 'string',
        sortable : true
    }, {
        name: 'text',
        type: 'string',
        sortable : true
    }, {
        name: 'info',
        type: 'string',
        sortable : true
    }]
});