/**
 * Created by zj on 13-12-16.
 */
Ext.define("reply.store.AttachmentStore", {
    extend : 'Ext.data.Store',
    model : "reply.model.Attachment",
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    },
    data:{'items':[  ]}
});