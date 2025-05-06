import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>page comments JsonPlaceholder</Link></li>
                <li><Link to={'dummyjson'}>page comments DumMyJson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;