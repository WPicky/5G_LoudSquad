export interface UserStatus {
  id: number;
  name: string;
}

export interface User {
  id: number;
  login: string;
  status: UserStatus;
}
