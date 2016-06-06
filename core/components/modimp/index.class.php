<?php

/**
 * Class modImpMainController
 */
abstract class modImpMainController extends modExtraManagerController {
	/** @var modImp $modImp */
	public $modImp;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('modimp_core_path', null, $this->modx->getOption('core_path') . 'components/modimp/');
		require_once $corePath . 'model/modimp/modimp.class.php';

		$this->modImp = new modImp($this->modx);
		//$this->addCss($this->modImp->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->modImp->config['jsUrl'] . 'mgr/modimp.js');
		$this->addHtml('
		<script type="text/javascript">
			modImp.config = ' . $this->modx->toJSON($this->modImp->config) . ';
			modImp.config.connector_url = "' . $this->modImp->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('modimp:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends modImpMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}