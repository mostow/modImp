<?php
$xpdo_meta_map['mpLog']= array (
  'package' => 'modimp',
  'version' => '1.1',
  'table' => 'mp_logs',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'description' => '',
  ),
  'fieldMeta' => 
  array (
    'description' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '250',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'indexes' => 
  array (
    'description' => 
    array (
      'alias' => 'description',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'description' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
);
