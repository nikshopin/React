import {useState, useEffect} from "react";
import {IUserPlaceholder} from "../../models/JsonPlaceholder/IUser.tsx";
import {apiUsersPlaceholder} from "../../services/api.users.placeholder.tsx";
import UserPlaceholderComponent from "../UserPlaceholderComponent/UserPlaceholderComponent.tsx";

const UsersPlaceholderComponent = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]|null> (null);
    useEffect(() => {
        apiUsersPlaceholder().then((item: IUserPlaceholder[])=> {
            setUsers(item);
        });
    },[])
    return (
        <div>
            {
                users && users.map((item)=>(
                    <UserPlaceholderComponent key = {item.id} item = {item}/>
                ))
            }
        </div>
    );
};

export default UsersPlaceholderComponent;