import type { AuthApi } from "../repo/types";
import type { AuthStore } from "../store/user";

const makeAuthLoginUseCase = ({
  authApi,
  useAuthStore,
}: {
  authApi: AuthApi;
  useAuthStore: AuthStore;
}) => {
  return Object.freeze({
    execute: async (username: string, password: string): Promise<void> => {
      await authApi.login(username, password);

      const authStore = useAuthStore();
      await authStore.fetchUser();
    },
  });
};

export default makeAuthLoginUseCase;
