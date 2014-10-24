/**
 * Created by zj on 13-12-16.
 *
 */
Ext.define("reply.model.Attachment", {
    extend : "Ext.data.Model",
    fields : [{
        name: 'attachmentId',
        type: 'string',
        sortable : false
    }, {
        name: 'originName',
        type: 'string',
        sortable : false
    }, {
        name: 'size',
        type: 'number',
        sortable : false
    }]
});
