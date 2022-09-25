<template>
  <div class="text-xl">
    {{ user?.getId() }} {{ user?.getUsername() }}
    <auth-logout />
  </div>
</template>

<script setup lang="ts">
import useAuthStore from "@/app/modules/auth/store";
import { ref } from "vue";
import AuthLogout from "../components/auth/logout.vue";

const authStore = useAuthStore();
const user = ref(authStore.getUser);
</script>
