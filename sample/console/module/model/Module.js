/**
 * Created by zj on 13-12-15.
 */
Ext.define("module.model.Module", {
    extend : "Ext.data.Model",
    fields : [{
        name: 'id',
        type: 'int',
        sortable : true
    }, {
        name: 'name',
        type: 'string',
        sortable : true
    }, {
        name: 'url',
        type: 'string',
        sortable : true
    }, {
        name: 'general',
        type: 'boolean',
        sortable : true
    }, {
        name: 'weight',
        type: 'int',
        sortable : true
    }, {
        name: 'enabled',
        type: 'boolean',
        sortable : true
    }]
});