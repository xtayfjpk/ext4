/**
 * Created by zj on 13-12-16.
 * 收件实体，这实体中并不包含收件正文
 */
Ext.define("inbox.model.ReceiveDoc", {
    extend : "Ext.data.Model",
    fields : [{
        name: 'id',
        type: 'int',
        sortable : false
    }, {
        name: 'state',
        type: 'int',
        sortable : false
    }, {
        name: 'sender',
        type: 'string',
        sortable : false
    }, {
        name: 'title',
        type: 'string',
        sortable : false
    }, {
        name: 'sendTime',
        type: 'string',
        sortable : false
    }]
});
