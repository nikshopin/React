import {IHair} from "./IHair.tsx";
import {IAddress} from "./IAddress.tsx";
import {IBank} from "./IBank.tsx";
import {ICompany} from "./ICompany.tsx";

export interface IUserDumMyJson {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}