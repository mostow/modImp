<?php
include_once 'setting.inc.php';

$_lang['modimp'] = 'Интеграция с SL';
$_lang['modimp_menu_desc'] = 'Импорт категорий и товаров.';
$_lang['modimp_intro_set_msg'] = "Курс следует брать с ресурса http://www.eubank.kz/. <br />
Если указано Вкл. с платной доставкой - будет осуществлен импорт позиций с признаком платная доставка.<br /> 
Значение поля Цена платной доставки в %, плюсуется к значению Профита.";
$_lang['modimp_intro_cat_msg'] = 'Необходимо отметить требуемые категории для импорта.';

$_lang['modimp_sets'] = 'Настройки';
$_lang['modimp_set_id'] = 'Id';
$_lang['modimp_set_url'] = 'URL поставщика';
$_lang['modimp_set_course'] = 'Курс RUB/KZT';
$_lang['modimp_set_profit'] = 'Профит в %';
$_lang['modimp_set_paid_delivery'] = 'Вкл. с платной доставкой';
$_lang['modimp_set_price_paid_delivery'] = 'Цена платной доставки в %';

$_lang['modimp_cats'] = 'Категоризация';

$_lang['modimp_set_create'] = 'Создать';
$_lang['modimp_set_update'] = 'Редактировать';
$_lang['modimp_item_enable'] = 'Включить Предмет';
$_lang['modimp_items_enable'] = 'Включить Предметы';
$_lang['modimp_item_disable'] = 'Отключить Предмет';
$_lang['modimp_items_disable'] = 'Отключить Предметы';
$_lang['modimp_item_remove'] = 'Удалить Предмет';
$_lang['modimp_items_remove'] = 'Удалить Предметы';
$_lang['modimp_item_remove_confirm'] = 'Вы уверены, что хотите удалить этот Предмет?';
$_lang['modimp_items_remove_confirm'] = 'Вы уверены, что хотите удалить эти Предметы?';
$_lang['modimp_set_active'] = 'Включено';

$_lang['modimp_item_err_name'] = 'Вы должны указать имя Предмета.';
$_lang['modimp_item_err_ae'] = 'Предмет с таким именем уже существует.';
$_lang['modimp_item_err_nf'] = 'Предмет не найден.';
$_lang['modimp_item_err_ns'] = 'Предмет не указан.';
$_lang['modimp_item_err_remove'] = 'Ошибка при удалении Предмета.';
$_lang['modimp_item_err_save'] = 'Ошибка при сохранении Предмета.';

$_lang['modimp_grid_search'] = 'Поиск';
$_lang['modimp_grid_actions'] = 'Действия';