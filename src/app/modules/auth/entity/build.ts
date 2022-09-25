import type { User, UserEntity } from "./types";

const buildMakeUser =
  () =>
  (user: User): UserEntity => {
    // TODO: Validate User, might just use ajv

    return Object.freeze({
      getId: () => user.id,
      getUsername: () => user.username,
    } as UserEntity);
  };

export default buildMakeUser;
