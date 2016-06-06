Ext.onReady(function() {
	modImp.config.connector_url = OfficeConfig.actionUrl;

	var grid = new modImp.panel.Home();
	grid.render('office-modimp-wrapper');

	var preloader = document.getElementById('office-preloader');
	if (preloader) {
		preloader.parentNode.removeChild(preloader);
	}
});