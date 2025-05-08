import {IUserPlaceholder} from "../models/JsonPlaceholder/IUser.tsx";
import {IPostPlaceholder} from "../models/JsonPlaceholder/IPost.tsx";
import {ICommentPlaceholder} from "../models/JsonPlaceholder/ICommentPlaceholder.tsx";
import {UrlsDumMyJson} from "../consts/urls.tsx";

export const apiUsersPlaceholder = async():Promise<IUserPlaceholder[]>=>{
    return await fetch(UrlsDumMyJson.users)
    .then((response)=> response.json());
}

export const apiPostsPlaceholder= async():Promise<IPostPlaceholder[]>=>{
    return await fetch(UrlsDumMyJson.posts)
        .then((response)=> response.json());
}

export const apiCommentsPlaceholder = async():Promise<ICommentPlaceholder[]>=>{
    return await fetch(UrlsDumMyJson.comments)
    .then((response)=> response.json());
}