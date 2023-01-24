<template>
  <q-page>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
    <div>
      <q-input outlined v-model="text" label="Att göra" />
    </div>
    <q-btn color="blue" @click="sendTodo">Skicka todo</q-btn>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { ref as dbRef, set } from 'firebase/database'
import { db } from 'src/boot/firebase'
const todos = useDatabaseList(dbRef(db, 'todos'))
const todo1 = useDatabaseObject(dbRef(db, 'todos/1'))
const text = ref('')
function sendTodo () {
  let newTodo = {
    id: 4,
    text: text.value
  }
  set(dbRef(db, 'todos/4'), newTodo)
}
</script>