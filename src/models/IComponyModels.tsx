import {IAddress} from "./IAddressModels.tsx";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress;
}