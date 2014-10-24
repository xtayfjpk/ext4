/**
 * Created by zj on 14-10-24.
 */
Ext.define('service.controller.ServiceController', {
    extend:'Ext.app.Controller',
    init:function(){
        var controller = this;
        this.control({
            'servicelistpanel' : {
                'cellclick' : function() {
                    console.info(arguments);
                    var columnIndex = arguments[2];
                    var grid = Ext.getCmp('esb_servicelistpanel');
                    if(columnIndex+1==grid.columns.length) {//占击的是最后一列，即操作列
                        var event = arguments[6];
                        var node = event.target;
                        var nodeName = node.nodeName;
                        if(nodeName.toUpperCase()==='A') {//点击的是超链接标签
                            var rowIndex = arguments[5];
                            var className = node.getAttribute('class');
                            if("start-service"===className) {
                                //startService();
                            } else if("stop-service"===className) {
                                //stopService();
                            } else if("restart-service"===className) {
                                //restartService();
                            } else if("suspend-service"===className) {
                                //suspendService();
                            } else if("resume-service"===className) {
                                //resumeService();
                            } else if("remove-service"===className) {
                                //removeService();
                            }
                        }
                    }
                }
            },
            'servicelistpanel toolbar button[text=发布服务]' : {
                'click' : function() {
                    Ext.create('service.view.ServiceDeployWindow').show();
                }
            },
            'servicelistpanel toolbar button[text=启动服务]' : {
                'click' : function(_button) {
                    var models = controller.getSelectedServices();
                    console.info(models);
                }
            },
            'servicedeploywindow form toolbar button[text=取消]' : {
                'click' : function(_button) {
                    Ext.getCmp('esb_servicedeploywindow').close();
                }
            }
        });
    },
    views: [
        'ServiceListPanel'
    ],
    stores: [
        "ServiceStore"
    ],
    models: [
        "Service"
    ],
    getSelectedServices : function() {
        var grid = Ext.getCmp('esb_servicelistpanel');
        var models = grid.getSelectionModel().getSelection();
        if(models.length==0) {
            Ext.Msg.alert("提示", "服务未选择");
            return null;
        }
        return models;
    }
});