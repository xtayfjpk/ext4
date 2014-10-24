/**
 * Created by zj on 13-12-10.
 */
Ext.define('node.controller.NodeController', {
    extend:'Ext.app.Controller',
    init:function(){
        var controller = this;
        this.control({
            'nodelistpanel toolbar button[text=收起所有节点]' : {
                'click':function(_button) {
                    var treePanel = _button.ownerCt.ownerCt;
                    treePanel.getEl().mask('正在收起，请等候...');
                    treePanel.collapseAll(function(){
                        treePanel.getEl().unmask();
                    });
                }
            },
            'nodelistpanel toolbar button[text=展开所有节点]' : {
                'click':function(_button) {
                    var treePanel = _button.ownerCt.ownerCt;
                    treePanel.getEl().mask('正在展开，请等候...');
                    treePanel.expandAll(function(){
                        treePanel.getEl().unmask();
                    });
                }
            },
            'nodelistpanel toolbar button[text=删除节点]' : {
                'click':function(_button) {
                    var treePanel = _button.ownerCt.ownerCt;
                    var selectNodes = treePanel.getSelectionModel().getSelection();
                    if(selectNodes.length==0) {
                        Ext.Msg.alert("提示", "请选择一个节点");
                        return;
                    }
                    Ext.Msg.confirm("警告", "您确定要删除该节点吗!", function(_result){
                        //TODO
                    });
                }
            },
            'nodelistpanel toolbar button[text=刷新节点树]' : {
                'click':function(_button) {
                    var treePanel = _button.ownerCt.ownerCt;
                    treePanel.getStore().reload();
                }
            },
            'nodelistpanel toolbar button[text=添加节点]' : {
                'click':function(_button) {
                    var treePanel = _button.ownerCt.ownerCt;
                    var selectedNode = controller.getSelectedNode(treePanel);
                    if(selectedNode) {
                        var nodeAddWindow = Ext.create('node.view.NodeAddWindow');
                        nodeAddWindow.show();
                    }
                }
            },
            'nodeaddwindow toolbar button[text=取消]' : {
                'click':function(_button) {
                    var nodeAddWindow = _button.ownerCt.ownerCt.ownerCt;
                    nodeAddWindow.close();
                }
            },
            'nodeaddwindow toolbar button[text=添加]' : {
                'click':function(_button) {
                    var treePanel = Ext.getCmp('esb_nodelistpanel');
                    var selectedNode = controller.getSelectedNode(treePanel);
                    var parentId = selectedNode.data.id;

                    var params = {};
                    if(parentId!="root") {
                        params["parent.id"] = parentId;
                    }

                    var formPanel = _button.ownerCt.ownerCt;
                    formPanel.submit({
                        clientValidation: true,
                        params: params,
                        success: function(form, action) {
                            Ext.Msg.alert('Success', action.result.msg);
                            var nodeAddWindow = formPanel.ownerCt;
                            nodeAddWindow.close();
                        },
                        failure: function(form, action) {
                            switch (action.failureType) {
                                case Ext.form.action.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                    break;
                                case Ext.form.action.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('Failure', 'Ajax communication failed');
                                    break;
                                case Ext.form.action.Action.SERVER_INVALID:
                                    Ext.Msg.alert('Failure', action.result.msg);
                            }
                        }
                    });

                }
            },
            'nodelistpanel toolbar button[text=编辑节点]' : {
                'click':function(_button) {
                    var treePanel = _button.ownerCt.ownerCt;
                    var selectedNode = controller.getSelectedNode(treePanel);
                    if(selectedNode) {
                        var nodeAddWindow = Ext.create('node.view.NodeEditWindow');
                        nodeAddWindow.show();
                    }
                }
            },
            'nodeeditwindow' : {
                'activate':function(_window) {
                    var treePanel = Ext.getCmp('esb_nodelistpanel');
                    var selectedNode = controller.getSelectedNode(treePanel);
                    var formPanel = _window.items.get(0);
                    formPanel.getForm().load({
                        url: 'data/NodeInfo.json',
                        params: {
                            id : selectedNode.data.id
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert("Load failed", "数据加载失败");
                        }
                    });
                }
            },
            'nodeeditwindow toolbar button[text=取消]' : {
                'click':function(_button) {
                    var nodeEditWindow = _button.ownerCt.ownerCt.ownerCt;
                    nodeEditWindow.close();
                }
            },
            'nodeeditwindow toolbar button[text=确认修改]' : {
                'click':function(_button) {
                    var formPanel = _button.ownerCt.ownerCt;
                    formPanel.submit({
                        clientValidation: true,
                        success: function(form, action) {
                            Ext.Msg.alert('Success', action.result.message);
                            var nodeAddWindow = formPanel.ownerCt;
                            nodeAddWindow.close();
                        },
                        failure: function(form, action) {
                            switch (action.failureType) {
                                case Ext.form.action.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                    break;
                                case Ext.form.action.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('Failure', 'Ajax communication failed');
                                    break;
                                case Ext.form.action.Action.SERVER_INVALID:
                                    Ext.Msg.alert('Failure', action.result.message);
                            }
                        }
                    });
                }
            },

            "nodelistpanel" : {
                'itemclick' : function(_treePanel, _model) {
                    console.info(_treePanel);
                    console.info(_model);
                    console.info(_treePanel.getSelectionModel().getSelection());
                }
            }
        });
    },
    views: [
        'NodeListPanel'
    ],
    stores: [
        //"NodeStore"
    ],
    models: [
        //"Node"
    ],
    getSelectedNode : function(_treePanel) {
        var selectNodes = _treePanel.getSelectionModel().getSelection();
        if(selectNodes.length==0) {
            Ext.Msg.alert("提示", "请选择一个节点");
            return null;
        }
        return selectNodes[0];
    }
});