import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import UserComponent from "../UserComponent/UserComponent.tsx";
import {apiUsersService} from "../../services/api.usersServices.ts";
import {IUsers} from "../../models/IUsersModels.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers|null>(null);
    const [query]=useSearchParams({page:'1'});
    const pageNumber:number = + query.get('page')!;
    console.log(pageNumber);
    useEffect(()=>{
        apiUsersService(pageNumber.toString()).then((respone)=>{
            setUsers(respone)
        })
    },[pageNumber])
    return (
        <div>
            {
                users && users.users.map((item)=>(
                    <UserComponent key={item.id} user={item}/>
                ))
            }
        </div>
    );
};

export default UsersComponent;