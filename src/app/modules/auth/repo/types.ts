import type { UserEntity } from "../entity/types";

export interface AuthApi {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<UserEntity>;
  register: (username: string, password: string) => Promise<string>;
}
