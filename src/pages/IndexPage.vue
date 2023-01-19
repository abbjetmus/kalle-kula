<template>
  <q-page>
    <ul>
      <li>
        <router-link to="/">Index</router-link>
      </li>
      <li>
        <router-link to="kalle">Kalle Page</router-link>
      </li>
      <li>
        <router-link to="nalle">Nalle Page</router-link>
      </li>
    </ul>
    <q-btn color="pink" to="nalle">Går till Nalle</q-btn>
    <div>
      <q-btn color="primary" @click="goToKalle"
        >Gå till Kalle Kula sidan!</q-btn
      >
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToKalle() {
  router.push("/kalle");
}
</script>
