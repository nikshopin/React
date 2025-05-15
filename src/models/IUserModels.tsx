import {IHair} from "./IHairModels.tsx";
import {IAddress} from "./IAddressModels.tsx";
import {IBank} from "./IBank.tsx";
import {ICompany} from "./IComponyModels.tsx";
import {ICrypto} from "./ICryptoModels.tsx";

export interface IUser {
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
    crypto: ICrypto;
    role: string;
}