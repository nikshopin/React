import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>page posts JsonPlaceholder</Link></li>
                <li><Link to={'dummyjson'}>page posts DumMyJson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;