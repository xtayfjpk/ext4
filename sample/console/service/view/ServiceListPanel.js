/**
 * Created by zj on 14-10-24.
 */
Ext.define("service.view.ServiceListPanel", {
    id : "esb_servicelistpanel",
    extend : "Ext.grid.Panel",
    alias : "widget.servicelistpanel",
    title : "服务管理",
    columnLines : true,
    region: 'center',
    selType:'checkboxmodel',
    multiSelect:true,
    columns: [{
        header: '服务ID',  dataIndex: 'serviceId', align : 'center', menuDisabled: true
    }, {
        header: '服务名称', dataIndex: 'name', align : 'center', menuDisabled: true
    }, {
        header: '业务类型',  dataIndex: 'businessType', align : 'center', menuDisabled: true
    }, {
        header: '服务描述', dataIndex: 'desc', align : 'center', menuDisabled: true
    }, {
        header: '供应商', dataIndex: 'vendor', align : 'center', menuDisabled: true
    }, {
        header: '服务状态', dataIndex: 'status', align : 'center', menuDisabled: true
    }, {
        xtype : 'booleancolumn',
        header: '服务跟踪',  dataIndex: 'trace',
        trueText : "已启用", falseText : "未启用", align : 'center', menuDisabled: true
    }, {
        xtype : 'booleancolumn',
        header: '自启用',  dataIndex: 'trace',
        trueText : "是", falseText : "否", align : 'center', menuDisabled: true
    }, {
        text:'操作',
        align:'center',
        sortable: false,
        menuDisabled: true,
        renderer:function(value,metadata,record,rowIndex,colIndex,store){
            var servicdId = record.data.serviceId;
            var s="";
            var start = "<a href='javascript:void(0)' class='start-service'>启动</a>&nbsp;&nbsp;&nbsp;";
            var stop  = "<a href='javascript:void(0)' class='stop-service'>停止</a>&nbsp;&nbsp;&nbsp;";
            var suspend = "<a href='javascript:void(0)' class='suspend-service'>挂起</a>&nbsp;&nbsp;&nbsp;";
            var resume = "<a href='javascript:void(0)' class='resume-service'>恢复</a>&nbsp;&nbsp;&nbsp;";
            if(record.data.status == 'Started' || record.data.status == 'Starting'){
                s = s + stop + suspend;
            }
            if(record.data.status == 'Stoped' || record.data.status == 'Stoping'){
                s = s + start;
            }
            if(record.data.status == 'Suspended' || record.data.status == 'Suspending'){
                s = s + resume;
            }
            s = s+ "<a href='javascript:void(0)' class='remove-service'>移除</a>&nbsp;&nbsp;&nbsp;";
            s = s+ "<a href='javascript:void(0)' class='view-service'>查看</a>&nbsp;&nbsp;&nbsp;";
            return s;
        }
    }],
    loadMask:{
        msg : '正在加载表格数据,请稍等...'
    },
    store : "ServiceStore",
    tbar : [{
        xtype : "button",
        text : "发布服务"
    }, '-', {
        xtype : "button",
        text : "启动服务"
    }, '-', {
        xtype : "button",
        text : "停止服务"
    }, '-', {
        xtype : "button",
        text : "重启服务"
    }, '-', {
        xtype : "button",
        text : "挂起服务"
    }, '-', {
        xtype : "button",
        text : "恢复服务"
    }, '-', {
        xtype : "button",
        text : "移除服务"
    }],
    renderTo: Ext.getBody(),
    dockedItems : [{
        xtype : "pagingtoolbar",
        store : "ServiceStore",
        dock : "bottom",
        displayInfo : true
    }]
});