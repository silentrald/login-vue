<template>
  <div id="login-page">
    <div id="auth-login-container">
      <auth-login />
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthLogin from "../components/auth/login.vue";
</script>

<style lang="postcss" scoped>
#login-page {
  @apply h-screen w-screen
    flex justify-center items-center;
}

#login-container {
  @apply w-3/4;
}
</style>
