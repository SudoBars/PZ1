# Проєкт: Таблиця військовослужбовців

## Опис

Цей проєкт демонструє динамічне оновлення таблиці військовослужбовців з використанням HTML, CSS, JavaScript і Node.js (Express). При натисканні кнопки "Старт" обчислюється середній вік військових.

---

## Як запустити проєкт

### Крок 1: Ініціалізація npm

```bash
npm init -y
```

Ця команда створює `package.json` з базовими налаштуваннями за замовчуванням.

### Крок 2: Встановлення Express

```bash
npm install express
```

Встановлюється бібліотека Express для створення серверу.

### Крок 3: Створення файлу серверу

Створіть файл `server.js` і додайте наступний код:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Маршрут для обчислення середнього віку
app.get('/average-age', (req, res) => {
  const soldiers = [
    { age: 33 },
    { age: 25 },
    { age: 31 }
  ];
  const totalAge = soldiers.reduce((sum, soldier) => sum + soldier.age, 0);
  const averageAge = (totalAge / soldiers.length).toFixed(2);
  res.json({ averageAge });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
```

### Крок 4: Запуск серверу

```bash
node server.js
```

Після запуску сервер буде доступний за адресою:

```url
http://localhost:3000
```

---

## Файли проєкту

1. **index.html**: HTML-розмітка таблиці.
2. **styles.css**: Стилі для таблиці та кнопки.
3. **script.js**: JavaScript для взаємодії з сервером.
4. **server.js**: Сервер на базі Node.js.

---

## Вимоги

- Node.js (версія 14 і вище).
- NPM (встановлюється разом з Node.js).

---

## Подальші кроки

1. Додати базу даних для зберігання даних військових.
2. Створити динамічний інтерфейс для додавання нових записів у таблицю.
3. Застосувати сучасний фреймворк для фронтенду (React/Vue/Angular).
