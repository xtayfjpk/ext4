/**
 * Created by zj on 13-12-16.
 */
Ext.define("dispatch.store.AttachmentStore", {
    extend : 'Ext.data.Store',
    model : "dispatch.model.Attachment",
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    },
    data:{'items':[  ]}
});