import UserCartDumMyJsonComponent from "../UserCartDumMyJsonComponent/UserCartDumMyJsonComponent.tsx";
import {useLocation} from "react-router-dom";
import {IUserDumMyJson} from "../../models/DumMyJson/IUserDumMyJson.tsx";
import {useEffect, useState} from "react";
import {IUserCartDumMyJson} from "../../models/DumMyJson/IUserCartDumMyJson.tsx";
import {apiUserCartDumMyJson} from "../../services/api.users.dummyjson.tsx";

const UserCartsDumMyJsonComponent = () => {

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
        <div>
            <div className ={`flex flex-col gap-2 justify-center w-1/2 border `}>
                {
                    userCarts && userCarts?.length > 0 ? (

                        userCarts.map((item)=>(
                            item.products.map((value)=> (
                                    <UserCartDumMyJsonComponent userCart={value}/>
                            ))

                        ))
                    ): (
                        <h2>The user has no purchases</h2>
                    )
                }

            </div>
        </div>
    );
};

export default UserCartsDumMyJsonComponent;