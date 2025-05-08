import {useEffect, useState} from "react";
import {apiUserCartDumMyJson, apiUsersDummyjson} from "../../services/api.users.dummyjson.tsx";
import {IUserDumMyJson} from "../../models/DumMyJson/IUserDumMyJson.tsx";
import UserDumMyJsonComponent from "../UserDumMyJsonComponent/UserDumMyJsonComponent.tsx";
import {useLocation} from "react-router-dom";
import {IUsersDumMyJson} from "../../models/DumMyJson/IUsersDumMyJson.tsx";
import UserCartDumMyJsonComponent from "../UserCartDumMyJsonComponent/UserCartDumMyJsonComponent.tsx";
import {IUserCartDumMyJson} from "../../models/DumMyJson/IUserCartDumMyJson.tsx";


const UsersDumMyJsonComponent = () => {
    const [users, setUsers] = useState< IUsersDumMyJson|null >(null);
    useEffect(()=>{
        apiUsersDummyjson().then((users)=>{
            setUsers(users)
        })
    },[])

    const {state} = useLocation();
    const user = state as IUserDumMyJson;
    const [userCarts, setUserCarts] = useState<IUserCartDumMyJson[]| null>(null);
     useEffect(() => {
        if (user){
            apiUserCartDumMyJson(user.id).then((response)=>{
                setUserCarts(response.carts)
            })
        }
    }, [user]);


    return (
        <div className = "flex flex-row justify-start items-start   ">

                <div className = "flex flex-col gap-2 justify-center  w-1/2">
                    {

                        users && users.users.map((item)=> (
                            <UserDumMyJsonComponent key = {item.id} item = {item}/>
                        ))
                    }
                </div>
                <div className ={`flex flex-col gap-2 justify-center w-1/2 border ${(!userCarts || userCarts.length === 0) ? 'hidden' : ''}`}>
                    {
                        userCarts && (
                            userCarts.map((item)=> (
                                item.products.map((value)=>(
                                    <UserCartDumMyJsonComponent userCart = {value}/>

                                ))

                            ))
                        )
                    }

                </div>


        </div>
    );
};

export default UsersDumMyJsonComponent;