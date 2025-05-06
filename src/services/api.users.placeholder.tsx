import {IUserPlaceholder} from "../models/JsonPlaceholder/IUser.tsx";
import {IPostPlaceholder} from "../models/JsonPlaceholder/IPost.tsx";
import {ICommentPlaceholder} from "../models/JsonPlaceholder/ICommentPlaceholder.tsx";

export const apiUsersPlaceholder = async():Promise<IUserPlaceholder[]>=>{
    return await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json());
}

export const apiPostsPlaceholder= async():Promise<IPostPlaceholder[]>=>{
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json());
}

export const apiCommentsPlaceholder = async():Promise<ICommentPlaceholder[]>=>{
    return await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response)=> response.json());
}