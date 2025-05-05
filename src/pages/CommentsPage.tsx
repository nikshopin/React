import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'commentsjsonplaceholder'}>CommentsJsonPlaceholderPage</Link></li>
                <li><Link to={'commentsdummyjson'}>CommentsDumMyJsonPage</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;