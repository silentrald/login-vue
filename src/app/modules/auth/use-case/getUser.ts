import type { AuthStore } from "../store/user";

const makeAuthGetUserUseCase = ({
  useAuthStore,
}: {
  useAuthStore: AuthStore;
}) => {
  return Object.freeze({
    execute: async (): Promise<void> => {
      const authStore = useAuthStore();
      await authStore.fetchUser();
    },
  });
};

export default makeAuthGetUserUseCase;
