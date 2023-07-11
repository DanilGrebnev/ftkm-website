# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Запуск приложения в режиме разработки. \
Откройте [http://localhost:8090](http://localhost:8090) чтобы увидеть приложение в браузере.

### `npm run build`

Создает приложение для продакшина в папке `build`.

Сборка минимизирована, а имена файлов включают хэши.\
Ваше приложение готово к развертыванию!

СМотреть секцию [deployment](https://facebook.github.io/create-react-app/docs/deployment) для большей информации.

## Структура файлов приложения

`src` - корневая папка приложения

`app` - папка с основными файлами приложения

`assets` - содержит иконки, изображения и видео

`pages` - папка страниц приложения

## Настройка приложения

### `Настройка порта запуска приложения`

В файле `package.json` в разделе `"scripts"` измените значение `PORT=8090` на нужный порт, тогда при запуске `npm start` приложение запустится на указанном порту.

### `Настройка параметров обращения к API`

В файле `src/globalVariables.ts` хранятся настройки `URL` обращения к `API`, а так же лимит получаемых за раз новостей. Чтобы изменить адрес для обращения к `API`, измените строку в параметре `URL_PRODUCTION`. Чтобы изменить количество получаемых за раз новостей, измените параметр `limit`.
