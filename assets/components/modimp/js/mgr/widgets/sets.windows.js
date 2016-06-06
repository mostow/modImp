modImp.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'modimp-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('modimp_item_create'),
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
	modImp.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(modImp.window.CreateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('modimp_set_url'),
			name: 'url',
			id: config.id + '-url',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('modimp_set_course'),
			name: 'course',
			id: config.id + '-course',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('modimp_set_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	},

	loadDropZones: function() {
	}

});
Ext.reg('modimp-set-window-create', modImp.window.CreateItem);


modImp.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'modimp-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('modimp_item_update'),
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
	modImp.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(modImp.window.UpdateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('modimp_item_name'),
			name: 'url',
			id: config.id + '-url',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('modimp_item_description'),
			name: 'course',
			id: config.id + '-course',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('modimp_item_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	},

	loadDropZones: function() {
	}

});
Ext.reg('modimp-set-window-update', modImp.window.UpdateItem);