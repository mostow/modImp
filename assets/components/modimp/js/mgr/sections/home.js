modImp.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'modimp-panel-home', renderTo: 'modimp-panel-home-div'
		}]
	});
	modImp.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(modImp.page.Home, MODx.Component);
Ext.reg('modimp-page-home', modImp.page.Home);