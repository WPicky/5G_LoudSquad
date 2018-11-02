export interface UserStatus {
  id: number;
  name: string;
}

export interface User {
  id: number;
  login: string;
  status: UserStatus;
  avatar: string;
  last_name: string;
  first_name: string;
  mail: string;
  last_connection: string;
}
