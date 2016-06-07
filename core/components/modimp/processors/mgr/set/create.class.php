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
		$course = trim($this->getProperty('course'));
		if (empty($course)) {
			$this->modx->error->addField('course', $this->modx->lexicon('modimp_set_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('course' => $course))) {
			$this->modx->error->addField('course', $this->modx->lexicon('modimp_set_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'mpSetCreateProcessor';