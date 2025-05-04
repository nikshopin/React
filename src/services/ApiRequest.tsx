import {IPost} from "../models/posts.tsx";


export const ApiRequest =async(url:string):Promise< IPost[] > => {
    return await fetch(url)
    // return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());
}
