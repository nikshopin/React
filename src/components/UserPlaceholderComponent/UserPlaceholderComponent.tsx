import {IUserPlaceholder} from "../../models/JsonPlaceholder/IUser.tsx";
import {FC} from "react";

type UserPlaceholderComponentProps = {
    item: IUserPlaceholder
}

const UserPlaceholderComponent: FC <UserPlaceholderComponentProps> = ({item}) => {
    return (
        <div>

            <h2>{item.name}</h2>
            <p>{item.username}</p>

        </div>
    );
};

export default UserPlaceholderComponent;