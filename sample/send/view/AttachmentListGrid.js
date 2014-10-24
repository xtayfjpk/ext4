/**
 * Created by zj on 13-12-18.
 */
Ext.define("send.view.AttachmentListGrid", {
    extend : "Ext.grid.Panel",
    alias : "widget.attachmentlistgrid",
    title:'已添加附件',
    minHeight:150,
    maxHeight:250,
    columnLines : true,
    columns: [
        Ext.create("Ext.grid.RowNumberer"),
        { header: '文件名称',  dataIndex: 'filename',menuDisabled:true, width:500,sortable:false},
        { header: '文件大小(Kb)', dataIndex: 'size',  menuDisabled:true, width:100, xtype:'numbercolumn', format:'0.0',sortable:false},
        {
            header: '删除', xtype:'actioncolumn',
            icon:'${pageContext.request.contextPath}/images/entity/icon_delete.gif',
            align:'center',tdCls:'hand',width:40,sortable:false,menuDisabled:true,
            handler:function(_grid,_rowIndex) {
                var store = Ext.data.StoreManager.lookup('attachmentStore');
                var attachmentId = store.getAt(_rowIndex).get('attachmentId');
                //移除表单中的隐藏附件ID字段，true表示该隐藏字段
                Ext.getCmp('dzgw_uploadForm').remove('dzgw_attachment_'+attachmentId, true);
                //从store中移除相应model
                store.removeAt(_rowIndex);
            }
        }
    ],
    store : "AttachmentStore",
    tbar : [{
        xtype : "button",
        text : "添加附件"
    }]
});