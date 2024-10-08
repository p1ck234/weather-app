# Weather App

Простое веб-приложение для отображения текущей погоды и прогноза погоды для выбранного города. Использует API OpenWeatherMap для получения данных о погоде.

## Демо-проект

[Ссылка](https://weather-app-chi-eosin-88.vercel.app/)

## Функциональность
- Поиск погоды по названию города.
- Отображение текущей температуры, влажности, скорости ветра и описания погоды.
- Отображение значка погоды.
- Прогноз погоды на несколько дней вперед.
- Отображение лоадера во время загрузки данных.
- Обработка ошибок (например, город не найден).
  
## Технологии
- React — библиотека для построения пользовательских интерфейсов.
- Vite — быстрый инструмент для сборки проектов.
- Axios — библиотека для выполнения HTTP-запросов.
- Jest и React Testing Library — для тестирования компонентов.
- ESLint и Prettier — для линтинга и форматирования кода.
- CSS Modules — для стилизации компонентов.

## Установка и запуск

Предварительные требования

- Node.js версии 14 или выше.
- npm версии 6 или выше.

1. Клонируйте репозиторий:
   ```bash
    git clone https://github.com/p1ck234/weather-app.git
    cd weather-app
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Создайте файл переменных окружения, создайте файл .env в корне проекта и добавьте ваш API ключ OpenWeatherMap:
    ```bash
    VITE_OPENWEATHERMAP_API_KEY=ваш_api_ключ
    ```
    Примечание: Вы можете получить API ключ, зарегистрировавшись на [OpenWeatherMap](https://openweathermap.org/).
5. Запустите
   ```bash
   npm run dev
   ```
   Приложение будет доступно по адресу http://localhost:5173.

## Скрипты проекта
запускает дев-сервер для разработки.
   ```bash
      npm run dev
   ```
собирает приложение для продакшена.
   ```bash
      npm run build
   ```
предварительный просмотр собранного приложения.
   ```bash
npm run preview
   ```
запускает тесты с помощью Jest.
   ```bash
npm run test
   ```
запускает линтер ESLint для проверки кода.
   ```bash
npm run lint
   ```
запускает линтер и автоматически исправляет проблемы.
   ```bash
npm run lint:fix
   ```
форматирует код с помощью Prettier.
   ```bash
npm run format
   ```
## Тестирование
Запуск тестов
```bash
npm run test
```
Покрытие тестами
- App.test.jsx — тестирует основной компонент приложения.
- Search.test.jsx — тестирует компонент поиска.
- WeatherDetails.test.jsx — тестирует компонент отображения деталей погоды.

## Линтинг и форматирование
Запуск линтера
```bash
npm run lint
```
Автоматическое исправление ошибок линтинга
```bash
npm run lint:fix
```
Форматирование кода
```bash
npm run format
```





