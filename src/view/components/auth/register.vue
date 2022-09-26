<template>
  <vee-form
    id="auth-register-form"
    @submit="register"
    :validation-schema="registerSchema"
  >
    <h1 id="auth-register-header">Some Website Name</h1>

    <div class="pixel-input-container">
      <label class="pixel-label" for="username">Username</label>
      <vee-field
        v-model="username"
        class="pixel-input"
        name="username"
        type="text"
        placeholder="Username"
      />
      <vee-error class="error-text" name="username" />
    </div>

    <div class="pixel-input-container">
      <label class="pixel-label" for="password">Password</label>
      <vee-field
        v-model="password"
        class="pixel-input"
        name="password"
        type="password"
        placeholder="Password"
      />
      <vee-error class="error-text" name="password" />
    </div>

    <div class="pixel-input-container">
      <label class="pixel-label" for="cpassword">Confirm Password</label>
      <vee-field
        v-model="cpassword"
        class="pixel-input"
        name="cpassword"
        type="password"
        placeholder="Confirm Password"
        :validate-on-blur="false"
        :validate-on-input="false"
      />
      <vee-error class="error-text" name="cpassword" />
    </div>

    <span class="error-text" v-if="error">{{ error }}</span>

    <div />

    <button id="register-btn">Register</button>
  </vee-form>
</template>

<script lang="ts" setup>
import router from "@/view/router";
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeError,
} from "vee-validate";
import { ref } from "vue";
import { authRegister } from "@/app/modules/auth/use-case";
import { HttpError } from "@/app/shared/http/error";

const username = ref("");
const password = ref("");
const cpassword = ref("");
const error = ref("");

const registerSchema = {
  username(value: string) {
    value = value ? value.trim() : "";
    if (value === "") {
      return "Username is required";
    }

    if (value.length < 8) {
      return "Username is too short (min 8 chars)";
    }

    return true;
  },
  password(value: string) {
    if (!value) {
      return "Password is required";
    }

    if (value.length < 8) {
      return "Password is too short (min 8 chars)";
    }

    return true;
  },
  cpassword(value: string) {
    if (value !== password.value) {
      return "Password Mismatch";
    }

    return true;
  },
};

const register = async () => {
  try {
    await authRegister.execute(username.value, password.value);
    router.push("/login");
  } catch (err) {
    if (err instanceof HttpError) {
      error.value = err.getErrors().toString();
    }
  }
};
</script>

<style lang="postcss" scoped>
#auth-register-form {
  @apply border-4 border-black
    px-4 py-2;
}

#auth-register-header {
  @apply text-6xl font-bold text-black mb-4;
}

#register-btn {
  @apply text-4xl;
}

.pixel-input-container {
  @apply flex flex-col gap-2;
}

.pixel-label {
  @apply text-4xl text-black;
}

.pixel-input {
  @apply border-4 border-black
    px-4 py-2
    text-2xl text-black;
}

.error-text {
  @apply text-4xl text-red italic;
}
</style>
