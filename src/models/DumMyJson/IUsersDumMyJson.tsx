import {IUserDumMyJson} from "./IUserDumMyJson.tsx";

export interface IUsersDumMyJson {
    users: IUserDumMyJson[];
    total: number,
    skip: number,
    limit: number
}