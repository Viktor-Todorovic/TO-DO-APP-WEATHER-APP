<template>
  <div class="container">
    <h1>TO DO + WEATHER APP</h1>
    <div class="calendar p-5">
      <h1>calendar</h1>
      <VCalendar expanded />
    </div>

    <div class="bottom_containers">
      <div class="left_container">
        <h1>left</h1>
      </div>

      <div class="right_container">
        <h1>right</h1>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.username }} - {{ user.password }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/users')
    users.value = response.data
  } catch (err) {
    console.error('Greška prilikom dohvatanja korisnika:', err)
  }
})
</script>


<style scoped>
.container {
  width: 65%;
  margin: 0 auto;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F08B51;
}

.bottom_containers {
  display: flex;
  width: 100%;
  padding: 0.5em;
}

.left_container {
  border: 1px solid black;
  width: 50%;
  background-color: #FFF8E8;
}

.right_container {
  border: 1px solid black;
  width: 50%;
  background-color: #FFF8E8;
}
</style>
