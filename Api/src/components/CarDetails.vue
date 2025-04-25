<template>
    <div v-if="car">
      <h1>{{ car.make }} {{ car.model }} ({{ car.year }})</h1>
      <img :src="car.imageUrl" :alt="`Фото ${car.make} ${car.model}`" class="car-image" />
      <p><strong>Опис:</strong> {{ car.description }}</p>
      <ul>
        <li><strong>Колір:</strong> {{ car.color }}</li>
        <li><strong>Тип кузова:</strong> {{ car.bodyType }}</li>
        <li><strong>Коробка передач:</strong> {{ car.gearboxType }}</li>
        <li><strong>Пробіг:</strong> {{ car.mileage }} км</li>
        <li><strong>Тип палива:</strong> {{ car.fuelType }}</li>
        <li><strong>Ціна за годину:</strong> {{ car.hourlyPrice }} $/год</li>
        <li><strong>Доступність:</strong> {{ car.isAvailable ? 'Доступний' : 'Недоступний' }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Завантаження даних автомобіля...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarDetails",
    data() {
      return {
        car: null,        // тут збережемо отримані дані про авто
        loading: false,   // стан завантаження (для індикації)
      };
    },
    created() {
      // Отримуємо ID авто із параметрів маршруту
      const carId = this.$route.params.id;
      if (carId) {
        this.loading = true;
        // Виконуємо запит до API за даними конкретного авто
        fetch(`/api/cars/${carId}`)
          .then(res => res.json())
          .then(data => {
            this.loading = false;
            // Припускаємо, що API повертає об'єкт виду { car: { ...дані... }, success: true }
            this.car = data.car || data; 
          })
          .catch(err => {
            this.loading = false;
            console.error("Помилка завантаження авто:", err);
          });
      }
    }
  };
  </script>
  
  <style>
  .car-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em 0;
  }
  </style>
  