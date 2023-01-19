<template>
  <h1>User Details Page</h1>
  <q-card v-if="user != null">
    <q-card-section>
      <div class="text-h6">{{ user.name }}</div>
      <div class="text-subtitle2">email: {{ user.email }}</div>
    </q-card-section>

    <q-card-section>
      Address: {{ user.address.street }}, {{ user.address.city }}
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users/" + route.params.id)
    .then((response) => response.json())
    .then((json) => {
      user.value = json;
    });
});

const user = ref(null);
</script>
