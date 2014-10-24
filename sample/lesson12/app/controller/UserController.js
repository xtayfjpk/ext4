/**
 * Created by zj on 13-12-10.
 */
Ext.define('AM.controller.UserController', {
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            'userlist button[text=删除]': {
                click:function(_button){
                    var grid = _button.findParentByType('gridpanel');
                    var data = grid.getSelectionModel().getSelection();
                    if(data.length==0) {
                        Ext.Msg.alert('提示','你最少要选择一条数据');
                    }
                }
            }
        });
    },
    views:['UserList'],
    stores:['UserStore'],
    models:['User']
});