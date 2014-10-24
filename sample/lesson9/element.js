/**
 * Created by zj on 13-12-10.
 */
(function(){
    Ext.onReady(function(){
        //var firstDiv = Ext.Element.Fly('firstDiv');
        var firstDiv = Ext.get('firstDiv');
        firstDiv.addClsOnOver('red')

        var firstInput = Ext.get('firstInput');
        firstInput.addKeyMap({
            key:Ext.EventObject.ENTER,
            ctrl:false,
            fn:function(){
                alert('Enter键按下');
            },
            scope:firstInput
        });

        Ext.create('Ext.panel.Panel', {
            title:'MyPanel',
            html:'<a href="http://www.baidu.com/">百度</a>',
            renderTo:Ext.getBody()
        })
    });
})();