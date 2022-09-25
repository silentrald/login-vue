import type { AuthApi } from "../repo/types";
import type { AuthStore } from "../store/user";

const makeAuthLogoutUseCase = ({
  authApi,
  useAuthStore,
}: {
  authApi: AuthApi;
  useAuthStore: AuthStore;
}) => {
  return Object.freeze({
    execute: async (): Promise<void> => {
      await authApi.logout();

      const authStore = useAuthStore();
      authStore.clearUser();
    },
  });
};

export default makeAuthLogoutUseCase;
