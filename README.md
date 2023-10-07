# weather-forecast (Прогноз погоды)

## Как пользоваться
Все просто. Как только открываете данный сайт, изначально вам показывается погода в Москве, это по дефолту. 

При клике на "мое местоположение", сайт определяет ваш город и показывает погоду.

В правой части сайта можно переключиться с Цельсий (С) на Фаренгейт(F).

При клике на "сменить город", появится текстовое поле, в которое можно вписать любой город существующий город на русском языке. Если название города указано не верно - появляется ошибка "city not found".



## О проекте
Данные о погоде отображаются с помощью сервиса openweathermap.

В api.js написана функция, получающая данные о погоде.

В appContent функции, отвечающие за отображение контентой части.

С помощью сервиса Geoapify получаем название города, в котором находится человек. Это реализовано в geolacation.js

В файле helper.js написаны вспомогательные функции: конвертация из (С) в (F); направление ветра и остальное.