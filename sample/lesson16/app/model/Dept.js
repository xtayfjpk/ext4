/**
 * Created by zj on 13-12-13.
 */
Ext.define("AM.model.Dept", {
    extend : "Ext.data.Model",
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