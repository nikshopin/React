import {IUser} from "./IUserModels.tsx";

export interface IUsers {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}