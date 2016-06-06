var modImp = function (config) {
	config = config || {};
	modImp.superclass.constructor.call(this, config);
};
Ext.extend(modImp, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('modimp', modImp);

modImp = new modImp();