const express = require('express');
const app = express();
const PORT = 3000;

// Дані військовослужбовців
const soldiers = [
  { rank: 'сержант', name: 'Степанов Степан Степанович', age: 33 },
  { rank: 'лейтенант', name: 'Федоров Федір Федорович', age: 25 },
  { rank: 'майор', name: 'Антоненко Антон Антонович', age: 31 }
];

// Ендпоінт для вичеслення середнього віку
app.get('/average-age', (req, res) => {
  const totalAge = soldiers.reduce((sum, soldier) => sum + soldier.age, 0);
  const averageAge = (totalAge / soldiers.length).toFixed(2);
  res.json({ averageAge });
});

// Статичні файли (HTML и CSS)
app.use(express.static(__dirname));

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
