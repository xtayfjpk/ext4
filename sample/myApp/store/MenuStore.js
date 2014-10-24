/**
 * Created by zj on 13-12-15.
 */
Ext.define("kingyea.store.MenuStore", {
    extend : 'Ext.data.TreeStore',
    defaultRootId : 'root',
    //model : "AM.model.Menu",//用model传递不了数据
    nodeParam : "id",
    proxy : {
        type : 'ajax',
        url : 'data/NodeTree.json',
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
        name: 'url',
        type: 'string',
        sortable : true
    }]
});