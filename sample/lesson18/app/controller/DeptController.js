/**
 * Created by zj on 13-12-12.
 */
/**
 * 部门管理控制器
 */
Ext.define("AM.controller.DeptController", {
    extend:"Ext.app.Controller",
    init:function() {
        this.control({
            "deptlist button[id=dept-add]" : {
                click : function(_button) {
                    //node.data["leaf"] = false;node.updateInfo();更新节点信息
                    var grid = this.getGrid(_button);
                    var addObj = {
                        text : "节点名称",
                        id : "01",
                        info : "",
                        orderIndex : 0,
                        manager : "",
                        nodeType : "ROOT",
                        leaf : true
                    };
                    //得到tree
                    var deptTree = this.getTree(_button);

                    Ext.create("AM.util.GridDoActionUtil").doInsert(grid, addObj, deptTree);
                }
            },
            "deptlist button[id=dept-save]" : {
                click : function(_button) {
                    alert(this.$className);
                }
            }
        });

        this.getGrid = function(_button) {
            return _button.ownerCt.ownerCt;
        };
        this.getTree = function(_button) {
            return _button.ownerCt.ownerCt.ownerCt
                .ownerCt.child("#west-tree").child("#dept-tree");
        };
    },

    views:[
        "DeptList", "MainLayout", "DeptTree"
    ],
    stores:[
        "DeptStore", "DeptTreeStore"
    ],
    models:[
        "Dept"
    ]
});