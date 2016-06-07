<?php

/**
 * Update an Item
 */
class mpSetUpdateProcessor extends modObjectUpdateProcessor {
	public $objectType = 'mpSet';
	public $classKey = 'mpSet';
	public $languageTopics = array('modimp');
	//public $permission = 'save';


	/**
	 * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return bool|string
	 */
	public function beforeSave() {
		if (!$this->checkPermissions()) {
			return $this->modx->lexicon('access_denied');
		}

		return true;
	}


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$id = (int)$this->getProperty('id');
		$course= trim($this->getProperty('course'));
		if (empty($id)) {
			return $this->modx->lexicon('modimp_set_err_ns');
		}

		if (empty($course)) {
			$this->modx->error->addField('course', $this->modx->lexicon('modimp_set_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('course' => $course, 'id:!=' => $id))) {
			$this->modx->error->addField('course', $this->modx->lexicon('modimp_set_err_ae'));
		}

		return parent::beforeSet();
	}
}

return 'mpSetUpdateProcessor';
