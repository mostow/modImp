## modImp

###Компонент интеграции modImp.

Алгоритм работы:
###1. Таблица начальных настроек - mpSet
- ресурс URL
- курс 5.13
- накрутка 30%
- импортировать позиции с признаком платная доставка - 1/0
- стоимость для позиций с признаком платная доставка в % - 100% (плюсуется к накрутке)

###2. Получаем все пункты категорий, записываем в табл. - mpCat
устанаваливаем значение level от 1 до тех пор пока не будет false, в цикле на первой итерации получаем
категории первого уровня, записываем в бд такие значения как id категории, её родительский parent_id
если равно 0 то это корневая категория, root_id и is_leaf - признак конечной категории.
На второй (n-й) итерации получаем категории второго (n-го уровня), записываем их id, parent_id.

Либо считываем скопом все категориии записываем в таблицу БД, с проверкой есть ли такая категории с
таким id, parent_id и name в таблице, если есть запись не трогаем, если нет, добавляем или обновляем,
записываем в лог изменения.

Выводим в виде таблицы с чекбоксами все конечные категории.

###3. Настраиваем категоризацию, мэпинг категорий, записываем в табл. modx_mpCat
На вкладке Категоризация, жмем кнопку Получить, после чего происходит подгрузка всех категорий из корневых.
Далее делаем мэпинг категорий.
Жмем Применить, после чего происходит создание категорий если их нет, либо если какие-то ранее
существующие категории не найдены то они удаляются, записываем в табл. modx_site_content.

###4. Синхронизация, загрузка товара, запись в табл. modx_site_content, modx_ms2_products, modx_ms2_product_files,
modx_ms2_product_categories

Табы:
1. Настройки (modx_slSet)
2. Категоризация (modx_slCat)
3. Журнал синхронизации (modx_slLog)


Используемые таблицы -
API -
modx_mpSet
modx_mpCat
modx_mpLog

MODX Revo -
modx_site_content

MiniShop2 -
modx_ms2_products
modx_ms2_product_files
modx_ms2_product_categories


Описание таблиц:
1. Таблица настроек modx_slSet, поля таблицы -
id
id_slset
course - курс RUB/KZT = 5.13 тенге на 30.05.16 (тип int) число с двумя символами после запятой
profit - процент накрутки на позицию (тип int) число от 0 до 100
paid_delivery - признак платной доставки (тип bool) равен 0 или 1, если равен 0 то позиции с признаком платной доставки не интегрируются в каталог
profit_paid_delivery - процент накрутки на позицию с признаком платной доставки (тип int)

2. Таблица корневых категорий slRootCategory -
id
root_category - корневые категории источника

3. Таблица категоризации modx_slCat, поля таблицы -
id
id_slcat
enable - включать или не включать эту категорию в синхронизацию
source_name_category
define_category - если равно 0 то брать название такое же как в source_name_category и использовать в destination_name_category
destination_name_category - конечное наименование категории в интернет магазине, через / (Пример: Категория1/Категория2 и т.д.)

4. Где и как создаем категорию -


5. Куда и как ложим позицию в категорию -
modx_site_content, необходимые поля - 
id -
...
pagetitle - наименование товара
longtitle - 
description - описание 
alias - наименование товара на английском транслите
published - опубликован  = 1
parent - id родительского ресурса
isfolder - является ли папкой
content - контент позиции товара
template - шаблон по умолчанию
menuindex - отображение в меню
searchable - участие в поиске
class_key - принимает значение msCategory или msProduct


таблица - modx_ms2_products, поля -
id - 
article - артикул товара
price - цена товара в тенге
old_price - старая цена в тенге
weight - вес товара
image - главная картинка в оригинальном размере, ложится в /assets/images/products/id/
thumb - образанная картинка 120x90, ложится в /assets/images/products/id/120x90
vendor -
made_in
new
popular
favorite
tags
color
size
source

таблица modx_ms2_product_files, здесь указываются все пути ко всем картинкам

Таблица modx_ms2_product_categories -
product_id - id позиции товара
category_id - id катагории в которой будет отображатся указанная позиция