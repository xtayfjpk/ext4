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
            },
            'userlist actioncolumn[id=edit]': {
                click:function(_grid, _item, _rowIndex, _colIndex) {
                    alert(_rowIndex+", " + _colIndex);
                }
            },
            'userlist' : {
                edit:function(_editor, _e, _options) {
                    //_e.record.commit();//只是去掉前端红三角
                }
            },
            'userlist toolbar button[id=save]':{
                'click':function(_button) {
                    var grid = _button.ownerCt.ownerCt;
                    var store = grid.getStore();
                    store.sync();
                    var records = store.getUpdatedRecords();
                    Ext.Array.each(records, function(_model){
                        _model.commit();
                    });
                }
            }
        });
    },
    views:['UserList'],
    stores:['UserStore'],
    models:['User']
});