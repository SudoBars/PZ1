// Додаємо обробник події "click" до кнопки з id "start-btn"
document.getElementById("start-btn").addEventListener("click", () => {
  
    // Виконуємо HTTP-запит методом GET до маршруту '/average-age'
    fetch('/average-age', { method: 'GET' })
    
      // Обробляємо відповідь, перетворюючи її в JSON
      .then(response => response.json())
      
      // Отримуємо дані і оновлюємо вміст елемента з id "average-age"
      .then(data => {
        document.getElementById("average-age").textContent = data.averageAge;
      })
      
      // Обробляємо помилки, якщо запит не вдався
      .catch(error => console.error('Error:', error));
  });
  