import authApi from "../repo";
import useAuthStore from "../store";
import makeAuthGetUserUseCase from "./getUser";
import makeAuthLoginUseCase from "./login";
import makeAuthLogoutUseCase from "./logout";

export const authLogin = makeAuthLoginUseCase({ authApi, useAuthStore });
export const authLogout = makeAuthLogoutUseCase({ authApi, useAuthStore });
export const authGetUser = makeAuthGetUserUseCase({ useAuthStore });

export default Object.freeze({
  authLogin,
  authLogout,
  authGetUser,
});
