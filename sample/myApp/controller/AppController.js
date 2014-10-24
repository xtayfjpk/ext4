/**
 * Created by zj on 13-12-10.
 */
Ext.define('kingyea.controller.AppController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            'menutree' : {
                'itemclick':function(_tree, _record, _item, _index, _event, _opts) {
                    var url = _record.data.url;
                    var centerTab = Ext.getCmp("edoc_centerTab");
                    var newPanel = Ext.create("Ext.panel.Panel", {
                        title : _record.data.text,
                        closable : true,
                        iconCls : "icon-activity",
                        html : '<iframe width="100%" height="100%" frameborder="0" src="'+url+'"></iframe>'
                    });
                    centerTab.add(newPanel);
                    centerTab.setActiveTab(newPanel);
                }
            }
        });
    },
    views:[
        'MenuTree',"CenterTab"
    ],
    stores:[
        "MenuStore"
    ],
    models:[
    ]
});