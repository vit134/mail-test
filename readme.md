# Тестовое задание для mail.ru

Ссылка на [GH Pages](https://vit134.github.io/mail-test/).

### Get started

```javascript
git clone git@github.com:vit134/mail-test.git
cd mail-test
npm install
npm run server

открыть http://localhost:3081 в браузере
```

### npm scripts
-**npm run dev** : запуск dev сервера и watcher

-**npm run watch** : запуск watcher

-**npm run build-dev** : сбилдить статику (без сжатия)

-**npm run build-prod** : сбилдить статику (со сжатием)

-**npm run server** : запуск dev сервера

-**npm run lint** : запуск линтера

-**npm test** : запуск тестов

### Описание

Console.assert заменил на console.log для удобства проверки

Решил разнести исходный файл на несколько модулей (src/utils) и импортировать их потом в index.js

Для создания thenable функции использовал Promise.resolve(). И доопределил методы on и trigger для эмитации event emmiter. Каждую итерацию цикла обхода массива вызывается метод trigger

**PS**

В файле src/index_all_in_one.js лиш дописана функция sequence из задания

**PS2**

Сбилженные файлы запушил в репозиторий нарочно, для того чтобы вы могли проверить выполнение на github pages




