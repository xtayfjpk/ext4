/**
 * Created by zj on 13-12-8.
 */
Ext.onReady(function(){
    Ext.create('Ext.data.Store', {
        storeId:'attachmentStore',
        fields:['filename', 'size', 'phone'],
        data:{'items':[
            { 'filename': '发送材料.png',  "size":"38Kb",  "phone":"555-111-1224"  },
            { 'filename': '上机说明.doc',  "size":"115Kb",  "phone":"555-222-1234" },
            { 'filename': '共享文件传输系统功能和界面设计.docx', "size":"693Kb",  "phone":"555-222-1244"  },
            { 'filename': '交换平台控制台权限管理模块设计.doc', "size":"432Kb", "phone":"555-222-1254"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        id:'attachmentGrid',
        title: '已添加附件',
        tbar:[{
            xtype:'button',
            text:'增加记录',
            handler:function(){
                this.ownerCt.ownerCt.getStore().add({
                    'filename': '交换平台控制台权限管理模块设计.doc', "size":"432Kb", "phone":"555-222-1254"
                });
            }
        }, '-', {
            xtype:'button',
            text:'删除记录',
            handler:function(){
                var _store = this.ownerCt.ownerCt.getStore();
                _store.removeAt(_store.getTotalCount()-1);
            }
        }],
        store: Ext.data.StoreManager.lookup('attachmentStore'),
        columns: [
            Ext.create("Ext.grid.RowNumberer"),
            { header: '文件名称',  dataIndex: 'filename',width:300,menuDisabled:true },
            { header: '文件大小', dataIndex: 'size', flex: 1, menuDisabled:true },
            { header: 'Phone', dataIndex: 'phone', menuDisabled:true },
            { header: '删除', xtype:'actioncolumn', icon:'icon_edit.gif', handler:function(_grid,_rowIndex){
                Ext.data.StoreManager.lookup('attachmentStore').removeAt(_rowIndex);
            }, align:'center',tdCls:'hand',width:40}
        ],
        height: 200,
        width: 800,
        frame:true,
        //selType:'checkboxmodel',
        //multiSelect:true,
        renderTo: Ext.getBody()
    });
});