<template>
  <vee-form @submit="login" :validation-schema="loginSchema">
    <vee-field v-model="username" name="username" type="text" />

    <vee-field v-model="password" name="password" type="password" />

    <button>Submit</button>
  </vee-form>
</template>

<script lang="ts" setup>
import { authLogin } from "@/app/modules/auth/use-case";
import router from "@/view/router";
import { Form as VeeForm, Field as VeeField } from "vee-validate";
import { ref } from "vue";

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

const username = ref("username");
const password = ref("password");

const login = async () => {
  try {
    await authLogin.execute(username.value, password.value);
    router.push("/");
  } catch (err) {
    // Error
  }
};
</script>
