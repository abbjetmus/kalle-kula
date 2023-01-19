<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Kalle Kula App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item clickable to="/kalle">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Kalle Kula Sidan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/users">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Users Sidan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Hem Sidan</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
