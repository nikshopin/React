import {useEffect, useState} from "react";
import UserDumMyJsonComponent from "../UserDumMyJsonComponent/UserDumMyJsonComponent.tsx";
import {IUsersDumMyJson} from "../../models/DumMyJson/IUsersDumMyJson.tsx";
import {apiUsersDummyjson} from "../../services/api.users.dummyjson.tsx";


const UsersDumMyJsonComponent = () => {
    const [users, setUsers] = useState< IUsersDumMyJson|null >(null);
    useEffect(()=>{
        apiUsersDummyjson().then((users)=>{
            setUsers(users)
        })
    },[])




    return (
        <div className = "flex flex-row justify-start items-start   ">

                <div className = "flex flex-col gap-2 justify-center  w-1/2">
                    {

                        users && users.users.map((item)=> (
                            <UserDumMyJsonComponent key = {item.id} item = {item}/>
                        ))
                    }
                </div>



        </div>
    );
};

export default UsersDumMyJsonComponent;