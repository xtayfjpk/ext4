/**
 * Created by zj on 13-12-24.
 */
Ext.define("share.view.ContactTreePanel", {
    extend : "Ext.tree.Panel",
    alias : "widget.contacttreepanel",
    //store : "DeptTreeStore",
    store : Ext.create("share.store.DeptTreeStore"),
    rootVisible : false,
    bbar : ["->","-",{
        xtype : "button",
        text : "取消"
    }, "-", {
        xtype : "button",
        text : "确认转发"
    }],
    //treepanel监听器
    listeners : {
        "checkchange" : function(_node, _checked, _options) {
			//如果不是叶子节点，即部门节点，则将部门下的所有节点同时选中或取消选中
	        if(!_node.isLeaf()) {
    	        var childNodes = _node.childNodes;
    	        for(var i=0; i<childNodes.length; i++) {
    	        	childNodes[i].set("checked", _checked);
        	    }
    	    } else {
    	    	this.updateParentNodeCheckState(_node);
        	}
	        
	    }
    },
    updateParentNodeCheckState : function(_node) {
    	var siblings = _node.parentNode.childNodes;
        var siblingsCount = siblings.length;
        var checkedCount = 0;
        for(var i=0; i<siblingsCount; i++) {
            if(siblings[i].get("checked")) {
            	checkedCount++;
            }
        }
        if(checkedCount==siblingsCount) {
        	_node.parentNode.set("checked", true);
        } else {
        	_node.parentNode.set("checked", false);
        }
    }
});