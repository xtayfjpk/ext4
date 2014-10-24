/**
 * Created by zj on 13-12-15.
 */
Ext.define("node.store.NodeStore", {
    extend : 'Ext.data.TreeStore',
    //model : Ext.create('node.model.Node'),//用model传递不了数据
    nodeParam : "id",
    proxy : {
        type : 'ajax',
        url : 'data/NodeTree.json',
        reader : 'json',
        autoLoad : true
    },
    fields : [{
        name: 'id',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'code',
        type: 'string'
    }, {
        name: 'ip',
        type: 'string'
    }, {
        name: 'port',
        type: 'string'
    }, {
        name: 'desc',
        type: 'string'
    }]

});