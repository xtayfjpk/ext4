/**
 * Created by zj on 14-10-24.
 */
Ext.define("service.model.Service", {
    extend : "Ext.data.Model",
    fields : [{
        name: 'id',
        type: 'int'
    }, {
        name: 'serviceId',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'businessType',
        type: 'string'
    }, {
        name: 'desc',
        type: 'string'
    }, {
        name: 'vendor',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }, {
        name: 'trace',
        type: 'boolean'
    }, {
        name: 'autoStart',
        type: 'boolean'
    }]
});