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

export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
}

export interface ICategory {
  id: number;
  title: string;
  createAt: string;
  updateAt: string;
  transactions?: [];
}

export interface IResponseTransactionLoader {
  categories: ICategory[];
  transactions: ITransaction[];
}
