/**
 * Created by zj on 13-12-15.
 */
Ext.define("module.store.ModuleStore", {
    extend : 'Ext.data.Store',
    model : "module.model.Module",
    proxy : {
        type : 'ajax',
        url : 'data/Module.json',
        reader : {
            type : 'json',
            root:'items'
        }

    },
    autoLoad : true

});