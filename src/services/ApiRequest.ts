import {IProducts} from "../models/products.tsx";

export const ApiRequest = async (url: string):Promise <IProducts> => {
    return await fetch(url)
    .then(response => response.json())
}