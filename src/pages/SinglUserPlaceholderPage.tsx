import {useLocation} from "react-router-dom";
import {IUserPlaceholder} from "../models/JsonPlaceholder/IUser.tsx";

const SingleUserPlaceholderPage = () => {
    const {state} = useLocation();
    const user = state as IUserPlaceholder;
    console.log(user);

    return (
        <div>

        </div>
    );
};

export default SingleUserPlaceholderPage;