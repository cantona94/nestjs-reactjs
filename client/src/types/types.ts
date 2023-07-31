export interface IUser {
  id: number;
  email: string;
  token: string;
}

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

export interface ICategory {
  id: number;
  title: string;
  createAt: string;
  updateAt: string;
  transactions: [];
}

export interface IResponseTransactionLoader {
  categories: ICategory[];
}
