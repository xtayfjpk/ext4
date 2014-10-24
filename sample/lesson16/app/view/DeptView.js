/**
 * Created by zj on 13-12-10.
 */
Ext.define('AM.view.DeptView', {
    extend:'Ext.tree.Panel',
    alias:'widget.deptview',
    title:'部门树形',
    width:500,
    height:300,
    loadMask:{
        msg : '正在加载表格数据,请稍等...'
    },
    //padding:'5 3 3 10',
    rootVisible:false,//控制根节点是否显示
    //useArrows : true,
    displayField:"name",
    store : "DeptStore",
    //ui:'footer',
    /*root:{
        id:'0',
        text:'root',
        leaf:false,
        children:[{
            id:'1',
            text:'技术部',
            checked:false,//显示复选框
            leaf:false,
            children:[{
                id:'2',
                text:'研发部',
                checked:false,
                leaf:true
            }, {
                id:'3',
                text:'实施部',
                checked:false,
                leaf:true
            }]
        }, {
            id:'4',
            text:'后勤部',
            checked:false,
            leaf:false,
            children:[{
                id:'5',
                text:'人事部',
                checked:false,
                leaf:true
            }, {
                id:'6',
                text:'行政部',
                checked:false,
                leaf:true
            }]
        }]
    },*/
    dockedItems:[{
        xtype:'toolbar',
        dock:'left',
        items:[{
            xtype:'button',
            text:'添加',
            id:'add'
        }, {
            xtype:'button',
            text:'复制',
            id:'copy'
        }, {
            xtype:'button',
            text:'删除',
            id:'delete'
        }]
    }, {
        xtype:'toolbar',
        dock:'top',
        items:[{
            xtype:'button',
            text:'展开所有',
            id:'openAll'
        }, {
            xtype:'button',
            text:'收起所有',
            id:'closeAll'
        }]
    }],
    viewConfig : {
        plugins : {
            ptype : "treeviewdragdrop"//,
            //appendOnly : true
        },
        listeners : {
            beforedrop : function(_node, _data, _model) {
                /*if(_model.get("leaf")) {
                    _model.set("leaf", false);
                }*/
            }
        }
    },

    columns : [{
        xtype : "treecolumn",
        text : "部门树",
        width : 150,
        dataIndex : "text"
    }, {
        text : "id",
        dataIndex : "id"
    }, {
        text : "info",
        dataIndex : "info"
    }]
});