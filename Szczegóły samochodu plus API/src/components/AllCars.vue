<template>
  <div>
    <h1>Lista samochodów</h1>
    <div v-if="cars.length">
      <div v-for="car in cars" :key="car._id" class="car-card">
        <h2>{{ car.make }} {{ car.model }}</h2>
        <img :src="car.imageUrl" alt="Фото авто" width="300" />
        <p>{{ car.description }}</p>
        <router-link :to="`/cars/${car._id}`">Więcej szczegółów</router-link>
      </div>
    </div>
    <div v-else>ładowania listy samochodów...</div>
  </div>
</template>

<script>
export default {
  name: 'AllCars',
  data() {
    return {
      cars: []
    }
  },
  async created() {
    const url = '/api/cars/get-all-cars';
    const response = await fetch(url);


    try {
      const response = await fetch(url)
      const result = await response.json()
      this.cars = result.cars
    } catch (error) {
      console.error('Błąd podczas ładowania listy samochodów:', error)
    }
  }
}
</script>
