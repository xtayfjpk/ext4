/**
 * Created by zj on 14-10-24.
 */
Ext.define("service.store.ServiceStore", {
    extend : 'Ext.data.Store',
    model : "service.model.Service",
    proxy : {
        type : 'ajax',
        url : 'data/Service.json',
        reader : {
            type : 'json',
            root:'items',
            autoLoad : true
        },
        autoLoad : true
    },
    autoLoad : true
});