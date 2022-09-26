<template>
  <vee-form
    id="auth-login-form"
    @submit="login"
    :validation-schema="loginSchema"
    v-slot="{ errors }"
  >
    <h1 id="auth-login-header">Some Website Name</h1>

    <span v-if="Object.keys(errors).length || failed" class="error-text">
      Auth Failed
    </span>

    <div id="auth-login-container">
      <vee-field
        v-model="username"
        class="pixel-input"
        name="username"
        type="text"
        placeholder="Username"
        :validateOnBlur="false"
        :validateOnChange="false"
        :validateOnInput="false"
      />
      <vee-field
        v-model="password"
        class="pixel-input"
        name="password"
        type="password"
        placeholder="Password"
        :validate-on-blur="false"
        :validate-on-change="false"
        :validate-on-input="false"
      />

      <button id="login-btn">Login</button>

      <router-link to="/register">Register</router-link>
    </div>
  </vee-form>
</template>

<script lang="ts" setup>
import { Form as VeeForm, Field as VeeField } from "vee-validate";
import { ref } from "vue";
import { RouterLink } from "vue-router";

import { authLogin } from "@/app/modules/auth/use-case";
import router from "@/view/router";

const loginSchema = {
  username(value: string) {
    if (value === undefined) {
      return "";
    }

    value = value.trim();
    if (value === "" || value.length < 8) {
      return "";
    }

    return true;
  },
  password(value: string) {
    if (!value || value.length < 8) {
      return "";
    }

    return true;
  },
};

const username = ref("");
const password = ref("");
const failed = ref(false);

const login = async () => {
  try {
    failed.value = false;
    await authLogin.execute(username.value, password.value);
    router.push("/");
  } catch (_err) {
    failed.value = true;
  }
};
</script>

<style lang="postcss" scoped>
#auth-login-form {
  @apply border-4 border-black
    px-4 py-2;
}

#auth-login-header {
  @apply text-6xl font-bold text-black mb-4;
}

#auth-login-container {
  @apply flex flex-col gap-4 mt-4;
}

#login-btn {
  @apply text-4xl;
}

.error-text {
  @apply text-4xl text-red italic;
}

.pixel-input {
  @apply border-4 border-black
    px-4 py-2
    text-2xl text-black;
}
</style>
