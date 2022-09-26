import type { AuthApi } from "../repo/types";

const makeAuthRegisterUseCase = ({ authApi }: { authApi: AuthApi }) => {
  return Object.freeze({
    execute: async (username: string, password: string): Promise<void> => {
      await authApi.register(username, password);
    },
  });
};

export default makeAuthRegisterUseCase;
