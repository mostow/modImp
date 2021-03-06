modImp.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'modimp-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: false,
			hideMode: 'offsets',
			items: [{
				title: _('modimp_items'),
				layout: 'anchor',
				items: [{
					html: _('modimp_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'modimp-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	modImp.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(modImp.panel.Home, MODx.Panel);
Ext.reg('modimp-panel-home', modImp.panel.Home);
