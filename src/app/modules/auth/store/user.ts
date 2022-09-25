import { defineStore, type StoreDefinition } from "pinia";
import { useCookies } from "vue3-cookies";

import type { Store } from "pinia";
import type { UserEntity } from "../entity/types";
import type { AuthApi } from "../repo/types";
import makeUser from "../entity";

export interface AuthState {
  user: UserEntity | undefined;
  auth: boolean;
  loading: boolean;
}

export interface AuthGetters {
  getUser: (state: AuthState) => UserEntity;
  isAuth: (state: AuthState) => Promise<boolean>;
  isLoading: (state: AuthState) => boolean;
}

export interface AuthActions {
  fetchUser: () => Promise<void>;
  clearUser: () => void;
}

export type AuthStore = StoreDefinition<
  "auth",
  AuthState,
  AuthGetters,
  AuthActions
>;

const delay = (ms: number) => {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
};

const makeUseAuthStore = (authApi: AuthApi) => {
  return defineStore("auth", {
    state: (): AuthState => {
      return {
        user: makeUser({ id: "", username: "" }),
        auth: false,
        loading: false,
      };
    },

    getters: {
      getUser: (state) => state.user,
      isAuth: async (state) => {
        if (!state.loading) {
          return state.auth;
        }

        while (state.loading) {
          await delay(100);
        }

        return state.auth;
      },
      isLoading: (state) => state.loading,
    },

    actions: {
      async fetchUser() {
        // Check cookies
        const { cookies } = useCookies();
        if (!cookies.get("SESSION")) {
          return;
        }

        try {
          this.loading = true;
          this.user = await authApi.getUser();
          this.auth = true;
        } catch (err) {
          this.auth = false;
        } finally {
          this.loading = false;
        }
      },

      clearUser() {
        this.user = makeUser({ id: "", username: "" });
        this.auth = false;
      },
    },
  });
};

export default makeUseAuthStore;
