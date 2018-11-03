export interface UserStatus {
  id: number;
  name: string;
}

export interface User {
  id: number;
  login: string;
  status: UserStatus;
  avatar: string;
  lastname: string;
  firstname: string;
  mail?: string;
  lastConnectionDate?: string;
  isAdmin?: boolean;
}
