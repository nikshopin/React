import { IComments} from "../models/comments.tsx";

export const commentsResponse =async (url:string): Promise<IComments>=>{
    return await fetch(url)
     .then(response=>response.json());
}