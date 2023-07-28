export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUser {
  id: number;
  email: string;
  password: string;
  createAt: string;
  updateAt: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}
