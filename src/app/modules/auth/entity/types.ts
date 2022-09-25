export interface User {
  id: string;
  username: string;
}

export interface UserEntity {
  getId: () => string;
  getUsername: () => string;
}
