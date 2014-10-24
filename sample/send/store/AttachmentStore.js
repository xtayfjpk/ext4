/**
 * Created by zj on 13-12-16.
 */
Ext.define("send.store.AttachmentStore", {
    extend : 'Ext.data.Store',
    model : "send.model.Attachment",
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    },
    data:{'items':[  ]}
});