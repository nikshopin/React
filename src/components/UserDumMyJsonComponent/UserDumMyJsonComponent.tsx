import {FC} from "react";
import {IUserDumMyJson} from "../../models/DumMyJson/IUserDumMyJson.tsx";
import {Link} from "react-router-dom";


type UserDumMyJsonComponentProps = {
    item: IUserDumMyJson;
}

const UserDumMyJsonComponent: FC<UserDumMyJsonComponentProps> = ({item}) => {
    return (
        <div>
            <h1><Link to={'/user/dummyjson/deteils/'+ item.id} state= {item}>
                {item.firstName}  {item.username} {item.email} {item.phone}

            </Link></h1>
        </div>
    );
};

export default UserDumMyJsonComponent;