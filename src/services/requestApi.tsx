import {IComment} from "../models/comments.tsx";

export const commentsResponse =async (url:string): Promise<IComment[]>=>{
    return await fetch(url)
     .then(response=>response.json());
}