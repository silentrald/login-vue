<template>
  <div class="text-xl">
    <auth-user-card />
    <auth-logout />
  </div>
</template>

<script setup lang="ts">
import AuthLogout from "../components/auth/logout.vue";
import AuthUserCard from "../components/auth/user-card.vue";
import useAuthStore from "@/app/modules/auth/store";
import { ref } from "vue";

const authStore = useAuthStore();
const user = ref(authStore.getUser);
</script>
