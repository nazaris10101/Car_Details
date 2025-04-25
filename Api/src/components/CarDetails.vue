<template>
  <div v-if="car">
    <h2>{{ car.make }} {{ car.model }} ({{ car.year }})</h2>
    <img :src="car.imageUrl" :alt="`Фото ${car.make} ${car.model}`" width="400" />
    <p><strong>Опис:</strong> {{ car.description }}</p>
    <ul>
      <li>Колір: {{ car.color }}</li>
      <li>Тип кузова: {{ car.bodyType }}</li>
      <li>Коробка: {{ car.gearboxType }}</li>
      <li>Пробіг: {{ car.mileage }} км</li>
      <li>Пальне: {{ car.fuelType }}</li>
      <li>Ціна за годину: {{ car.hourlyPrice }} $</li>
    </ul>
    <router-link to="/">← Назад</router-link>
  </div>

  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>

  <div v-else>
    <p>Завантаження даних авто...</p>
  </div>
</template>

<script>
export default {
  name: 'CarDetails',
  data() {
    return {
      car: null,
      error: null
    }
  },
  async created() {
    const carId = this.$route.params.carId;

    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://car-rental-merito-application.azurewebsites.net/api/cars/get-all-cars';
    const url = corsProxy + targetUrl;

    try {
      const response = await fetch(url);
      const result = await response.json();
      this.car = result.cars.find(car => car._id === carId);

      if (!this.car) {
        this.error = 'Автомобіль не знайдено';
      }
    } catch (err) {
      this.error = 'Помилка завантаження авто';
      console.error(err);
    }
  }
}
</script>
