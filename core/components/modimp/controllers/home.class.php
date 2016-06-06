<?php

/**
 * The home manager controller for modImp.
 *
 */
class modImpHomeManagerController extends modImpMainController {
	/* @var modImp $modImp */
	public $modImp;


	/**
	 * @param array $scriptProperties
	 */
	public function process(array $scriptProperties = array()) {
	}


	/**
	 * @return null|string
	 */
	public function getPageTitle() {
		return $this->modx->lexicon('modimp');
	}


	/**
	 * @return void
	 */
	public function loadCustomCssJs() {
		$this->addCss($this->modImp->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->modImp->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/widgets/sets.grid.js');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/widgets/sets.windows.js');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/widgets/cats.tree.js');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/widgets/home.panel.js');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/sections/home.js');
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({ xtype: "modimp-page-home"});
		});
		</script>');
	}


	/**
	 * @return string
	 */
	public function getTemplateFile() {
		return $this->modImp->config['templatesPath'] . 'home.tpl';
	}
}