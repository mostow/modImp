<?php

/**
 * Create an Item
 */
class mpSetCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'mpSet';
	public $classKey = 'mpSet';
	public $languageTopics = array('modimp');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('modimp_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('modimp_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'mpSetCreateProcessor';