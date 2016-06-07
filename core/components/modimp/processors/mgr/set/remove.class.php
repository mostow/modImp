<?php

/**
 * Remove an Items
 */
class mpSetRemoveProcessor extends modObjectProcessor {
	public $objectType = 'mpSet';
	public $classKey = 'mpSet';
	public $languageTopics = array('modimp');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('modimp_set_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var modImpItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('modimp_set_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'mpSetRemoveProcessor';