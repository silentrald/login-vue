<script setup lang="ts">
import { RouterView } from "vue-router";
import useAuthStore from "./app/modules/auth/store";
import { onMounted } from "vue";

onMounted(async () => {
  const authStore = useAuthStore();
  await authStore.fetchUser();
});
</script>

<template>
  <router-view />
</template>

<style scoped></style>
