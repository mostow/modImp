modImp.window.CreateSet = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'modimp-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('modimp_set_create'),
		width: 550,
		autoHeight: true,
		url: modImp.config.connector_url,
		action: 'mgr/set/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	modImp.window.CreateSet.superclass.constructor.call(this, config);
};
Ext.extend(modImp.window.CreateSet, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_url'),
			name: 'url',
			id: config.id + '-url',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_course'),
			name: 'course',
			id: config.id + '-course',
			anchor: '99%',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_profit'),
			name: 'profit',
			id: config.id + '-profit',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('modimp_set_paid_delivery'),
			name: 'paid_delivery',
			id: config.id + '-paid_delivery',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_price_paid_delivery'),
			name: 'price_paid_delivery',
			id: config.id + '-price_paid_delivery',
			anchor: '99%',
			allowBlank: false,
		}];
	},

	loadDropZones: function() {
	}

});
Ext.reg('modimp-set-window-create', modImp.window.CreateSet);


modImp.window.UpdateSet = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'modimp-set-window-update';
	}
	Ext.applyIf(config, {
		title: _('modimp_set_update'),
		width: 550,
		autoHeight: true,
		url: modImp.config.connector_url,
		action: 'mgr/set/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	modImp.window.UpdateSet.superclass.constructor.call(this, config);
};
Ext.extend(modImp.window.UpdateSet, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_url'),
			name: 'url',
			id: config.id + '-url',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_course'),
			name: 'course',
			id: config.id + '-course',
			anchor: '99%',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_profit'),
			name: 'profit',
			id: config.id + '-profit',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('modimp_set_paid_delivery'),
			name: 'paid_delivery',
			id: config.id + '-paid_delivery',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_set_price_paid_delivery'),
			name: 'price_paid_delivery',
			id: config.id + '-price_paid_delivery',
			anchor: '99%',
			allowBlank: false,
		}];
	},

	loadDropZones: function() {
	}

});
Ext.reg('modimp-set-window-update', modImp.window.UpdateSet);