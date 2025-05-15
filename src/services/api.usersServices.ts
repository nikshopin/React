import {IUsers} from "../models/IUsersModels.tsx";

export const  apiUsersService = async (page: string): Promise<IUsers> =>{
    const count =  10;
    const skip = +page * 10 -10;
    return await fetch('https://dummyjson.com/users?limit='+ count.toString()+'&skip='+skip.toString())
    .then(response => response.json())
}