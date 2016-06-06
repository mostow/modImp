<?php
$xpdo_meta_map['mpSet']= array (
  'package' => 'modimp',
  'version' => '1.1',
  'table' => 'mp_sets',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'url' => '',
    'course' => 0,
    'profit' => 0,
    'paid_delivery' => 0,
    'price_paid_delivery' => 0,
  ),
  'fieldMeta' => 
  array (
    'url' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'course' => 
    array (
      'dbtype' => 'integer',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
    'profit' => 
    array (
      'dbtype' => 'integer',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
    'paid_delivery' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'null' => true,
      'default' => 0,
    ),
    'price_paid_delivery' => 
    array (
      'dbtype' => 'integer',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
  ),
);
