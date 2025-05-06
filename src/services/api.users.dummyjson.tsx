import {IUsersDumMyJson} from "../models/DumMyJson/IUsersDumMyJson.tsx";
import {IPostsDumMyJson} from "../models/DumMyJson/IPostsDumMyJson.tsx";
import {ICommentsDumMyJson} from "../models/DumMyJson/ICommentsDumMyJson.tsx";

export const apiUsersDummyjson = async (): Promise<IUsersDumMyJson> => {
    return await fetch('https://dummyjson.com/users')
        .then((response)=> response.json());
}

export const apiPostsDumMyJson = async ():Promise<IPostsDumMyJson> => {
    return await fetch('https://dummyjson.com/posts')
        .then((response)=> response.json());
}

export const apiCommentsDumMyJson = async ():Promise<ICommentsDumMyJson> => {
    return await fetch('https://dummyjson.com/comments')
    .then((response)=> response.json());
}