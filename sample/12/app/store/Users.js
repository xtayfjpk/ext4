//User��ݼ���
Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AM.model.User',
	storeId: 's_user',
	proxy:{
	    type:'ajax',
	    url:'/ext4/sample/12/app/data/users.json',
	    reader: {
	        type: 'json',
	        root: 'items'
	    },writer:{
			type:'json'
		}
	},
	autoLoad: true //�ܹؼ�
});