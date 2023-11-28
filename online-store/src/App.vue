<script setup>
import { RouterView } from "vue-router";
import Menu from "./components/Layout/Menu.vue";
</script>

<template>
  <div
    class="flex flex-row min-h-screen p-10 m-10 rounded-3xl bg-slate-100 shadow-lg relative"
  >
    <Menu />
    <h1 class="text-3xl font-medium text-black">Dashboard</h1>
    <div class="flex flex-row shadow-lg">
      <RouterView />
    </div>
  </div>
</template>
