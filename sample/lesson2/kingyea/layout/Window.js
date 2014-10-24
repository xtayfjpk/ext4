/**
 * Created by zj on 13-12-9.
 */
Ext.define('kingyea.layout.Window', {
    extend:'Ext.window.Window',
    width:400,
    height:300,
    title:'MyWindow',
    //config中的配置属性会自动生成get与set方法
    config:{
        price:500
    }
});