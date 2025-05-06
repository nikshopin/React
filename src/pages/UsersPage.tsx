import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>

                <ul>
                    <li><Link to={'jsonplaceholder'}>page users JsonPlaceholder</Link></li>
                    <li><Link to={'dummyjson'}>page users DumMyJson</Link></li>
                </ul>
                <hr/>
                <Outlet/>

        </div>
    );
};

export default UsersPage;