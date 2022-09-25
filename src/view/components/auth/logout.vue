<template>
  <button id="logout-btn" @click="logout">Logout</button>
</template>

<script lang="ts" setup>
import { authLogout } from "@/app/modules/auth/use-case";
import router from "@/view/router";

const logout = async () => {
  try {
    await authLogout.execute();
    router.push("/login");
  } catch (err) {
    // Error
  }
};
</script>

<style lang="postcss" scoped>
#logout-btn {
  @apply text-4xl;
}
</style>
