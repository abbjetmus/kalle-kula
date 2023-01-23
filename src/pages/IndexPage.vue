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
      <q-btn color="primary" @click="goToKalle">Gå till Kalle Kula sidan!</q-btn>
    </div>

    <div>
      <ul>
        <li v-for="student in students" :key="student.id">{{ student.name }}</li>
      </ul>
    </div>

    <pre>{{ secondStudent }}</pre>

  </q-page>
</template>

<script setup>
import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { db } from 'src/boot/firebase'
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const students = useDatabaseList(dbRef(db, 'students'))
const secondStudent = useDatabaseObject(dbRef(db, 'students/2'))

function goToKalle () {
  router.push("/kalle")
}
</script>
