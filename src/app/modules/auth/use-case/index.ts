import authApi from "../repo";
import useAuthStore from "../store";
import makeAuthGetUserUseCase from "./getUser";
import makeAuthLoginUseCase from "./login";
import makeAuthLogoutUseCase from "./logout";
import makeAuthRegisterUseCase from "./register";

export const authLogin = makeAuthLoginUseCase({ authApi, useAuthStore });
export const authLogout = makeAuthLogoutUseCase({ authApi, useAuthStore });
export const authGetUser = makeAuthGetUserUseCase({ useAuthStore });
export const authRegister = makeAuthRegisterUseCase({ authApi });

export default Object.freeze({
  authLogin,
  authLogout,
  authGetUser,
  authRegister,
});
