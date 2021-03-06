# Funbox test task

## Level II:

* [Demo](https://nicktrunov.github.io/Funbox/build)
* [Pixel Perfect](https://i.imgur.com/1nuXVQS.png)

### Задание

**Браузеры:** Chrome, Firefox, Safari, IE11;<br>
**Инструменты:** любой сборщик на платформе Node.js;<br>
**Результат:** ссылка на страницу, которая корректно отображается на любых
современных десктопных компьютерах, смартфонах и планшетах, а также git-репозиторий с исходниками верстки.<br>

* внешний вид должен полностью соответствовать макету, а поведение — описанию задачи;
* фон занимает всю площадь экрана, блок находится по центру вертикально и
горизонтально;
* на планшетах упаковки располагаются треугольником, на смартфонах друг
под другом;
* информация о продукте может меняться;
* каждая из упаковок может быть выбрана или недоступна для выбора. Выбор
осуществляется нажатием на упаковку или на текст «купи» в описании;
* можно выбрать одновременно несколько упаковок, а также отменить свой
выбор повторным нажатием на упаковку;
* состояние наведения применяется к выбранной упаковке не сразу, а после
того, как курсор ушел с нее после первоначального выбора.

## Level I:

### Q1
Чем отличается хорошая верстка от плохой с точки зрения:
* пользователя: сайт удобен в использовании, приятен на вид, навигация понятна и лаконична, все пользовательские запросы выполняются с минимальным количеством кликов, загрузка быстрая.
* менеджера проекта: проект работает без ошибок на любых устройствах и в любых браузерах, можно без проблем показывать клиенту.
* дизайнера: дизайн сайта аккуратен, выбрана гармоничная цветовая палитра, разные блоки хорошо сочетаются друг с другом. Выдержан единый стиль проекта.
* верстальщика: вёрстка выполнена по определённой методологии (например, БЭМ), все классы имеют осмысленные названия, код имеет правильную табуляцию, стили прописаны максимально эффективно, без повторений и костылей.
* клиентского программиста: понятная логика в названиях классов, легко применять скрипты.
* серверного программиста: количество запросов в базу данных минимизировано.

### Q2
Основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки:

Применяется общая методология вёрстки, имеется styleguide со всеми элементами сайта. Используются препроцессоры для сокращения количества кода и возможности использования понятных шаблонов.

Я при вёрстке использовал препроцессоры Pug и SCSS, сборщик Webpack, для подключения плагинов – jQuery. Сначала верстал отдельные блоки миксинами, потом собирал из них цельные страницы.

### Q3
Основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах:

Элементы сайта должны адаптироваться под размер экрана пользователя. Должны быть предусмотрены тач-жесты.

Для адаптивной вёрстки я пользовался media-запросами в стилях, flex в CSS, а также сеткой из Bootstrap.

### Q4
Для экономии времени при вёрстке пользовался препроцессорами Pug и SCSS, сборщиком Webpack, а также собирал сайт из отдельных переиспользуемых блоков.

### Q5
Почему страница отображается некорректно в Safari на iOS и в IE на Windows:
С такими ситуациями не сталкивался, думаю, если нет доступа к исходникам, надо смотреть сайт через инструменты разработчика в браузере. Желательно найти устройство, на котором можно посмотреть в проблемном браузере, либо использовать эмуляторы. Как вариант, поискать особенности и частые проблемы этих браузеров, чтобы понять, почему ошибки могут быть именно там.

### Q6
Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши:
Запросить эту информацию у дизайнера, либо сделать своё решение, предварительно утвердив его у тимлида.

### Q7
Какие ресурсы вы используете для развития в профессиональной сфере:
medium.com, habr.ru, туториалы на youtube.com, книги.

Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или и то, и другое?
Сейчас ближе вёрстка, потому что JS знаю на начальном уровне, но интересно углубляться в программирование с постепенным уходом от вёрстки к более сложным задачам.

Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
Написание музыки, кинорежиссура, разработка игр (видео и настольных).

### Q8
Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами:

Никита, 23 года, сейчас живу в Санкт-Петербурге. Более 4 лет работал контент-менеджером, параллельно изучал HTML/CSS и основы JS. В рамках одного обучения сверстал с нуля несколько страниц сайта, ссылка на репозиторий: https://github.com/NickTrunov/FSD