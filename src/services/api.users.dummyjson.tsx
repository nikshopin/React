import {IPostsDumMyJson} from "../models/DumMyJson/IPostsDumMyJson.tsx";
import {ICommentsDumMyJson} from "../models/DumMyJson/ICommentsDumMyJson.tsx";
import {IUserCartsDumMyJson} from "../models/DumMyJson/IUserCartsDumMyJson.tsx";
import {UrlsDumMyJson} from "../consts/urls.tsx";
import {IUsersDumMyJson} from "../models/DumMyJson/IUsersDumMyJson.tsx";

export const apiUsersDummyjson = async (): Promise<IUsersDumMyJson> => {
    return await fetch(UrlsDumMyJson.users)
        .then((response)=> response.json());
}

export const apiPostsDumMyJson = async ():Promise<IPostsDumMyJson> => {
    return await fetch(UrlsDumMyJson.posts)
        .then((response)=> response.json());
}

export const apiCommentsDumMyJson = async ():Promise<ICommentsDumMyJson> => {
    return await fetch(UrlsDumMyJson.comments)
    .then((response)=> response.json());
}

export const apiUserCartDumMyJson = async (id: number):Promise<IUserCartsDumMyJson>=>{
    return await fetch(UrlsDumMyJson.cartByUserId(id))
        .then((response)=> response.json());
}