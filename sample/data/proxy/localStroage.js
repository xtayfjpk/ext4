/**
 * Created by zj on 13-12-9.
 */
Ext.onReady(function(){
    Ext.define('Search', {
        extend:'Ext.data.Model',
        fields:['id', 'query'],
        proxy: {
            type:'localstorage',
            id:'twitter-searches'
        }
    });

    Ext.define('RecentContact', {
        extend:'Ext.data.Model',
        fields:['username', 'viewName'],
        proxy: {
            type:'localstorage',
            id:'Recent-Contact'
        }
    });


    var searchStore = Ext.create("Ext.data.Store", {
        model:'Search'
    });

    searchStore.load();
    /*store.add({query:'Sencha Touch'});
    store.add({query:'Ext JS'});
    store.sync();*/
    searchStore.each(function(_model){
        alert(_model.get('query'));
    });

    var recentContactStore = Ext.create("Ext.data.Store", {
        model:'RecentContact'
    });
    recentContactStore.load();
    /*recentContactStore.add({username:'zhangsan',viewName:'张三'});
    recentContactStore.add({username:'lisi',viewName:'李四'});
    recentContactStore.sync();*/
    recentContactStore.each(function(_model){
        alert(_model.get('username')+','+_model.get('viewName'));
    });
});