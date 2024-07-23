# Password Calculator

Это небольшое приложение имеет функционал хранилища паролей, но не хранящее эти пароли ни на компьютере пользователя ни на сервере. Работающее на любом устройстве и если сохранить, то работающее и без подключения к интернету.

<details>
<summary><span style="font-size: 16pt;">Как это работает?</summary>

В основе лежит мастер пароль который необходимо придумать и запомнить. Из комбинации мастер пароля и названия сайта генерируется пароль для этого сайта. Так как пара мастер пароль и название сайта при каждой повторной генерации дает одинаковый результат, генерируемые пароли нет необходимости сохранять.

----------------

</details>

<details>
<summary><span style="font-size: 16pt;">Безопасность <span></summary>

Данное приложение гарантирует отсутствие хранения или передачи паролей третьим лицам следующим: 
+ Приложение может работать без подключения к интернету; 
+ Не использует фреймворки или библиотеки сторонних разработчиков, за исключением браузера; 
+ Является open-source проектом и доступно для изучения исходного кода. Можно самостоятельно убедиться что все чисто.

<span> Преимущества: <span><br>
+ Достаточно помнить всего лишь один мастер пароль, но для каждого сайта генерируется уникальный;
+ Генерируемые пароли имеют случайный набор символов, хуже поддаются брутфорсу;
+ Так как приложение не хранит пароли, эти пароли не подвержены утечки при взломах;
+ Быстрая смена генерируемого пароля, добавление всего одного символа или изменение версии создает новый уникальный пароль.

<span> Недостатки: <span><br>
+ Утечка мастер пароля открывает доступ ко всем паролям;
+ Один мастер пароль проще поддается брутфорсу.

Перечисленные риски появляются если злоумышленник в курсе об использовании Password Calculator для генерации паролей. Риски можно контролировать если нигде не записывать пароль, а сам пароль придумать как можно длиннее с применением различных символов.

----------------

</details>