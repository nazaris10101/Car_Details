<template>
  <div v-if="car">
    <h2>{{ car.make }} {{ car.model }} ({{ car.year }})</h2>
    <img :src="car.imageUrl" :alt="`Фото ${car.make} ${car.model}`" width="400" />
    <p><strong>Опис:</strong> {{ car.description }}</p>
    <ul>
      <li>Kolor: {{ car.color }}</li>
      <li>Typ nadwozia: {{ car.bodyType }}</li>
      <li>Skrzynia biegów: {{ car.gearboxType }}</li>
      <li>Przebieg samochodu: {{ car.mileage }} км</li>
      <li>Paliwo: {{ car.fuelType }}</li>
      <li>Cena: {{ car.hourlyPrice }} $</li>
    </ul>
    <router-link to="/">← Z powrotem</router-link>
  </div>

  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>

  <div v-else>
    <p>Ładowanie danych samochodu...</p>
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
        this.error = 'Samochód nie znaleziony';
      }
    } catch (err) {
      this.error = 'Błąd pobierania';
      console.error(err);
    }
  }
}
</script>
