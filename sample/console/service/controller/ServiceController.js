/**
 * Created by zj on 14-10-24.
 */
Ext.define('service.controller.ServiceController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            'servicelistpanel' : {
                'select':function() {

                }
            },
            'servicelistpanel toolbar button' : {
                'click' : function() {

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
    ]
});