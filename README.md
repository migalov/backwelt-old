# Backwelt

---

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Backwelt - сборка Gulp, предназначенная для разработки веб-страниц и email-писем

## Преимущества

- Структурированный код сборки
- Использование ES6
- Для писем или веб-страниц используются только необходимые для этого плагины
- Преобразование картинок в формат *.webp и его использование при условии поддержки браузером

## Установка
```sh
cd my-project
yarn
```

## Разработка
Запуск режима разработки:
```sh
yarn start
```

## Сборка проекта

Для веб страниц:

```sh
yarn build
```

Для email:

```sh
yarn build email
```
#### Альтернативный вариант скачивания плагинов
```sh
yarn add gulp gulp-file-include gulp-sass gulp-html-min gulp-size browser-sync gulp-plumber gulp-notify del gulp-concat gulp-autoprefixer gulp-csso gulp-rename gulp-shorthand gulp-group-css-media-queries gulp-sass sass gulp-sass-glob gulp-babel @babel/core @babel/preset-env gulp-uglify webpack webpack-stream gulp-imagemin@7 gulp-newer gulp-webp gulp-webp-css gulp-fonter gulp-ttf2woff2 gulp-if gulp-load-plugins require-dir @babel/register gulp-inline-css
```

## От автора

Руководство по использованию и сборка всё ещё в разработке, но уже выполняет поставленные на данный момент времени задачи.