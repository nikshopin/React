// import {useSearchParams} from "react-router-dom";
import {IUser} from "../../models/IUserModels.tsx";
import {FC} from "react";

type UserComponentProps = {
    user: IUser;
}

const UserComponent: FC <UserComponentProps> = ({user}) => {
                // const [query, setQuery] = useSearchParams({page:'1'})
                // let pageCurrent: number = + query.get('page')!;


    return (
        <div>

            <h1>{user.email}</h1>
        </div>
    );
};

export default UserComponent;