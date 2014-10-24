/**
 * Created by zj on 13-12-10.
 */
Ext.define('module.controller.ModuleController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            'modulelistpanel' : {
                'select':function() {

                }
            },
            'modulelistpanel toolbar button' : {
                'click' : function() {
                    Ext.create('module.view.ModuleAddWindow').show();
                }
            }
        });
    },
    views: [
        'ModuleListPanel', 'ModuleAddWindow'
    ],
    stores: [
        "ModuleStore"
    ],
    models: [
        "Module"
    ]
});