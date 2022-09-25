<template>
  <div id="auth-user-card">
    <span>Hello, {{ user.getUsername() }}</span>
  </div>
</template>

<script lang="ts" setup>
import useAuthStore from "../../../app/modules/auth/store";

const authStore = useAuthStore();

const user = authStore.getUser;
</script>

<style lang="postcss" scoped>
#auth-user-card {
  @apply border-4 border-black
    px-4 py-2;
}
</style>
