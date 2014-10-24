/**
 * Created by zj on 13-12-15.
 */
Ext.define("node.model.Node", {
    extend : "Ext.data.Model",
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