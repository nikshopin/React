import {IUserCartDumMyJson} from "./IUserCartDumMyJson.tsx";

export interface IUserCartsDumMyJson {
  carts: IUserCartDumMyJson[];
  total: number;
  skip: number;
  limit: number;
}