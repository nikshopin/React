import {useEffect, useState} from "react";
import {IUsersDumMyJson} from "../../models/DumMyJson/IUsersDumMyJson.tsx";
import {apiUsersDummyjson} from "../../services/api.users.dummyjson.tsx";
import UserDumMyJsonComponent from "../UserDumMyJsonComponent/UserDumMyJsonComponent.tsx";


const UsersDumMyJsonComponent = () => {
    const [users, setUsers] = useState<IUsersDumMyJson| null>(null);
    useEffect(()=>{
        apiUsersDummyjson().then((users)=>{
            setUsers(users)
        })
    },[])

    return (
        <div className = "flex flex-col gap-2 justify-center">
            {
                users && users.users.map((item)=> (
                    <UserDumMyJsonComponent key = {item.id} item = {item}/>
                ))
            }
        </div>
    );
};

export default UsersDumMyJsonComponent;