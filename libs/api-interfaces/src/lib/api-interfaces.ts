export interface User {
  username: string;
  password: string;
}

export type Token = string;

export interface GenericResponse<T> {
  success: boolean;
  message: T;
}
