import {ICompany} from "./ICompany.tsx";
import {IAddress} from "./IAddress.tsx";

export interface IUserPlaceholder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}