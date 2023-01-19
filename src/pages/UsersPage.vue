<template>
  <h1>Users Page</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <router-link :to="`users/${user.id}`">{{ user.name }}</router-link>
    </li>
  </ul>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      users.value = json;
    });
});

const users = ref([]);
</script>
