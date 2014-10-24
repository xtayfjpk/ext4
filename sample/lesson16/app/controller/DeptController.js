/**
 * Created by zj on 13-12-10.
 */
Ext.define('AM.controller.DeptController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            'deptview button[id=openAll]':{
                'click':function(_button, _event) {
                    var tree = _button.ownerCt.ownerCt;
                    tree.expandAll();
                }
            },
            'deptview button[id=closeAll]':{
                'click':function(_button, _event) {
                    var tree = _button.ownerCt.ownerCt;
                    tree.collapseAll();
                }
            },
            'deptview button[id=add]':{
                'click':function(_button, _event) {
                    var tree = _button.ownerCt.ownerCt;
                    var nodes = tree.getChecked();
                    if(nodes.length!=1) {
                        alert('你只能选择一个节点');
                    } else {
                        alert(nodes[0]);
                    }
                }
            },
            'deptview' : {
                'itemclick':function(_tree, _record, _item, _index, _event, _opts) {
                    alert(_record.data.info);
                },
                "itemexpand" : function(_node, _options) {
                    var d = _node.data.info;
                    alert(d);
                }
            }
        });
    },
    views:[
        'DeptView'
    ],
    stores:[
        "DeptStore"
    ],
    models:[
    ]
});