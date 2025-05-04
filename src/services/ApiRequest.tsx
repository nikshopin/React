import {IPost} from "../models/posts.tsx";


export const ApiRequest =async(url:string):Promise < IPost[] > => {
    return await fetch(url)
        .then(res => res.json());
}
