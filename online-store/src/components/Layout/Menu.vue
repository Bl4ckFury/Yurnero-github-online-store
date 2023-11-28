<script setup>
import { RouterLink } from "vue-router";
import IconSettings from "../icons/IconSettings.vue";
import IconTeams from "../icons/IconTeams.vue";
import IconHome from "../icons/IconHome.vue";
import IconChat from "../icons/IconChat.vue";
import IconCart from "../icons/IconCart.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen mr-10 shadow-lg rounded-3xl px-6 py-6">
    <Logo />
    <div class="flex flex-col mt-6">
      <RouterLink
        class="flex flex-row uppercase mb-2 rounded-xl py-2 pl-4 pr-20 focus:bg-slate-300 focus:opacity-100 opacity-50"
        to="/"
      >
      <IconHome />
        home
      </RouterLink>
      <RouterLink
        class="flex flex-row uppercase mb-2 rounded-xl pl-4 pr-20 focus:bg-slate-300 py-2 focus:opacity-100 opacity-50"
        to="/products"
      >
        <IconCart />
        products
      </RouterLink>
      <RouterLink
        class="flex flex-row uppercase mb-2 rounded-xl pl-4 pr-20 focus:bg-slate-300 py-2 focus:opacity-100 opacity-50"
        to="/feedback"
        >
        <IconChat />
        feedback
        </RouterLink
      >
      <RouterLink
        class="flex flex-row uppercase mb-2 rounded-xl pl-4 pr-20 focus:bg-slate-300 py-2 focus:opacity-100 opacity-50"
        to="/teams"
      >
      <IconTeams />
        teams
      </RouterLink>
      <RouterLink
        class="flex flex-row uppercase mb-2 rounded-xl pl-4 pr-20 focus:bg-slate-300 py-2 focus:opacity-100 opacity-50"
        to="/settings"
      >
        <IconSettings />
        settings
      </RouterLink>
    </div>
  </div>
</template>
