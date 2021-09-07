export interface User {
  username: string;
  password: string;
}

export interface Token {
  token: string;
};

export interface GenericResponse<T> {
  success?: boolean;
  message: T;
}
