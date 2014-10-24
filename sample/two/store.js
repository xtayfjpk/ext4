/**
 * Created by zj on 13-12-8.
 */
/*Ext.Loader.setConfig({
    enable:true
});*/
(function(){
    Ext.onReady(function(){
        Ext.define("Person", {
            extend:'Ext.data.Model',
            fields:['name', 'age'],
            proxy:{type:'memory'}
        });

        var s = new Ext.data.Store({
            data:[{
                name:'zhangsan', age:1
            }, {
                name:'xxx', age:26
            }],
            autoLoad:true,
            model:'Person'
        });

        s.each(function(_model){
            alert(_model.get('name'));
        });
    });
})();