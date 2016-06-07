modImp.grid.Cats = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'modimp-grid-cats';
	}
	Ext.applyIf(config, {
		url: modImp.config.connector_url,
		fields: this.getFields(config),
		columns: this.getColumns(config),
		tbar: this.getTopBar(config),
		sm: new Ext.grid.CheckboxSelectionModel(),
		baseParams: {
			action: 'mgr/cat/getlist'
		},
		listeners: {
			rowDblClick: function (grid, rowIndex, e) {
				var row = grid.store.getAt(rowIndex);
				this.updateSet(grid, e, row);
			}
		},
		viewConfig: {
			forceFit: true,
			enableRowBody: true,
			autoFill: true,
			showPreview: true,
			scrollOffset: 0,
			getRowClass: function (rec, ri, p) {
				return !rec.data.active
					? 'modimp-grid-row-disabled'
					: '';
			}
		},
		paging: true,
		remoteSort: true,
		autoHeight: true,
	});
	modImp.grid.Cats.superclass.constructor.call(this, config);

	// Clear selection on grid refresh
	this.store.on('load', function () {
		if (this._getSelectedIds().length) {
			this.getSelectionModel().clearSelections();
		}
	}, this);
};
Ext.extend(modImp.grid.Cats, MODx.grid.Grid, {
	windows: {},

	getMenu: function (grid, rowIndex) {
		var ids = this._getSelectedIds();

		var row = grid.getStore().getAt(rowIndex);
		var menu = modImp.utils.getMenu(row.data['actions'], this, ids);

		this.addContextMenuItem(menu);
	},

	createSet: function (btn, e) {
		var w = MODx.load({
			xtype: 'modimp-cat-window-create',
			id: Ext.id(),
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		});
		w.reset();
		w.setValues({active: true});
		w.show(e.target);
	},

	updateSet: function (btn, e, row) {
		if (typeof(row) != 'undefined') {
			this.menu.record = row.data;
		}
		else if (!this.menu.record) {
			return false;
		}
		var id = this.menu.record.id;

		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/cat/get',
				id: id
			},
			listeners: {
				success: {
					fn: function (r) {
						var w = MODx.load({
							xtype: 'modimp-cat-window-update',
							id: Ext.id(),
							record: r,
							listeners: {
								success: {
									fn: function () {
										this.refresh();
									}, scope: this
								}
							}
						});
						w.reset();
						w.setValues(r.object);
						w.show(e.target);
					}, scope: this
				}
			}
		});
	},

	editSet: function (btn, e) {

		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/cat/get',
				id: id
			},
			listeners: {
				success: {
					fn: function (r) {
						var w = MODx.load({
							xtype: 'modimp-cat-window-update',
							id: Ext.id(),
							record: r,
							listeners: {
								success: {
									fn: function () {
										this.refresh();
									}, scope: this
								}
							}
						});
						w.reset();
						w.setValues(r.object);
						w.show(e.target);
					}, scope: this
				}
			}
		});
	},

	removeSet: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.msg.confirm({
			title: ids.length > 1
				? _('modimp_cats_remove')
				: _('modimp_cat_remove'),
			text: ids.length > 1
				? _('modimp_cats_remove_confirm')
				: _('modimp_cat_remove_confirm'),
			url: this.config.url,
			params: {
				action: 'mgr/cat/remove',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function (r) {
						this.refresh();
					}, scope: this
				}
			}
		});
		return true;
	},

	disableSet: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/cat/disable',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		})
	},

	enableSet: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/cat/enable',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		})
	},

	getFields: function (config) {
		return [
			'id',
			'identifier',
			'root_identifier',
			'parent_identifier',
			'level',
			'is_leaf',
			'name',
			'path',
			'slug',
			'photo_base_url',
			'active'
		];
	},

	getColumns: function (config) {
		return [{
			header: _('modimp_cat_id'),
			dataIndex: 'id',
			sortable: true,
			width: 10
		}, {
			header: _('modimp_cat_identifier'),
			dataIndex: 'identifier',
			sortable: true,
			width: 40,
		}, {
			header: _('modimp_cat_root_identifier'),
			dataIndex: 'root_identifier',
			sortable: false,
			width: 40,
		}, {
			header: _('modimp_cat_parent_identifier'),
			dataIndex: 'parent_identifier',
			sortable: false,
			width: 40,
		}, {
			header: _('modimp_cat_level'),
			dataIndex: 'level',
			sortable: false,
			width: 20,
		}, {
			header: _('modimp_cat_is_leaf'),
			dataIndex: 'is_leaf',
			sortable: false,
			width: 20,
		}, {
			header: _('modimp_cat_name'),
			dataIndex: 'name',
			sortable: false,
			width: 100,
		}, {
			header: _('modimp_cat_path'),
			dataIndex: 'path',
			sortable: false,
			width: 40,
		}, {
			header: _('modimp_cat_slug'),
			dataIndex: 'slug',
			hide: true,
			sortable: false,
			width: 40,
		}, {
			header: _('modimp_cat_photo_base_url'),
			dataIndex: 'photo_base_url',
			sortable: false,
			width: 40,
		}, {
			header: _('modimp_cat_active'),
			dataIndex: 'active',
			renderer: modImp.utils.renderBoolean,
			width: 20,
		}];
	},

	getTopBar: function (config) {
		return [{
			text: '<i class="icon icon-align-justify"></i>&nbsp;&nbsp;' + _('modimp_cat_imp'),
			handler: this.impCats,
			scope: this
		}, {
			text: '<i class="icon icon-list-ul"></i>&nbsp;&nbsp;' + _('modimp_cat_sync'),
			handler: this.syncCats,
			scope: this
		}, {
			text: '<i class="icon icon-th"></i>&nbsp;&nbsp;' + _('modimp_cat_imp_products'),
			handler: this.impProductsCats,
			scope: this
		}, '->', {
			xtype: 'textfield',
			name: 'query',
			width: 200,
			id: config.id + '-search-field',
			emptyText: _('modimp_grid_search'),
			listeners: {
				render: {
					fn: function (tf) {
						tf.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
							this._doSearch(tf);
						}, this);
					}, scope: this
				}
			}
		}, {
			xtype: 'button',
			id: config.id + '-search-clear',
			text: '<i class="icon icon-times"></i>',
			listeners: {
				click: {fn: this._clearSearch, scope: this}
			}
		}];
	},



	onClick: function (e) {
		var elem = e.getTarget();
		if (elem.nodeName == 'BUTTON') {
			var row = this.getSelectionModel().getSelected();
			if (typeof(row) != 'undefined') {
				var action = elem.getAttribute('action');
				if (action == 'showMenu') {
					var ri = this.getStore().find('id', row.id);
					return this._showMenu(this, ri, e);
				}
				else if (typeof this[action] === 'function') {
					this.menu.record = row.data;
					return this[action](this, e);
				}
			}
		}
		return this.processEvent('click', e);
	},

	_getSelectedIds: function () {
		var ids = [];
		var selected = this.getSelectionModel().getSelections();

		for (var i in selected) {
			if (!selected.hasOwnProperty(i)) {
				continue;
			}
			ids.push(selected[i]['id']);
		}

		return ids;
	},

	_doSearch: function (tf, nv, ov) {
		this.getStore().baseParams.query = tf.getValue();
		this.getBottomToolbar().changePage(1);
		this.refresh();
	},

	_clearSearch: function (btn, e) {
		this.getStore().baseParams.query = '';
		Ext.getCmp(this.config.id + '-search-field').setValue('');
		this.getBottomToolbar().changePage(1);
		this.refresh();
	}
});
Ext.reg('modimp-grid-cats', modImp.grid.Cats);
