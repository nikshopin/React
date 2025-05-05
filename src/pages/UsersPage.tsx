import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            {
                <ul>
                    <li><Link to={'jsonplaceholder'}>UsersJsonPlaceholderPage</Link></li>
                    <li><Link to={'dummyjson'}>UsersDumMyJsonPage</Link></li>
                </ul>
            }
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;