import {FC} from "react";
import {IUserDumMyJson} from "../../models/DumMyJson/IUserDumMyJson.tsx";


type UserDumMyJsonComponentProps = {
    item: IUserDumMyJson;
}

const UserDumMyJsonComponent: FC<UserDumMyJsonComponentProps> = ({item}) => {
    return (
        <div>
            <h1>{item.firstName} {item.username}</h1>
        </div>
    );
};

export default UserDumMyJsonComponent;