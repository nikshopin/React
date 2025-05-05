import {Outlet} from "react-router-dom";
import UsersJsonPlaceholderComponent from "../UsersJsonPlaceholderComponent/UsersJsonPlaceholderComponent.tsx";

const UsersComponent = () => {
    return (
        <div>
            <UsersJsonPlaceholderComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersComponent;