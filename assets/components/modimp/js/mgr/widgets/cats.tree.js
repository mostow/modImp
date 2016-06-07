modImp.tree.Cats = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		url: modImp.config.connector_url
		,id: 'modimp-cats-tree'
		,title: ''
		,anchor: '100%'
		,rootVisible: false
		,expandFirst: true
		,enableDD: false
		,ddGroup: 'modx-treedrop-dd'
		,remoteToolbar: false
		,action: 'mgr/cat/getnodes'
		,tbarCfg: {id: config.id ? config.id+'-tbar' : 'modx-tree-resource-tbar'}
		,baseParams: {
			action: 'mgr/cat/getnodes_'
			,currentResource: MODx.request.id || 0
			,currentAction: MODx.request.a || 0
		}

		//,tbar: this.getTopBar(config)

		,listeners: {
			checkchange: function(node, checked) {
				this.mask.show();
				MODx.Ajax.request({
					url: modImp.config.connector_url
					,params: {
						action: 'mgr/cat/cat'
						,category_id: node.attributes.pk
						,product_id: MODx.request.id
					}
					,listeners: {
						success: {fn: function() {this.mask.hide();}, scope:this}
						,failure: {fn: function() {this.mask.hide();}, scope:this}
					}
				});
			}
			,afterrender: function() {
				this.mask = new Ext.LoadMask(this.getEl());
			}
		}
	});
	modImp.tree.Cats.superclass.constructor.call(this,config);
};
Ext.extend(modImp.tree.Cats, MODx.tree.Tree,{

	getTopBar: function (config) {
		return [{
			text: '<i class="icon icon-plus"></i>&nbsp;' + _('modimp_set_create'),
			handler: this.createCat,
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

	_showContextMenu: function(n,e) {
		n.select();
		this.cm.activeNode = n;
		this.cm.removeAll();
		var m = [];
		m.push({text: _('directory_refresh'),handler: function() {this.refreshNode(this.cm.activeNode.id,true);}});
		this.addContextMenuItem(m);
		this.cm.showAt(e.xy);
		e.stopEvent();
	}

});
Ext.reg('modimp-cats-tree',modImp.tree.Cats);