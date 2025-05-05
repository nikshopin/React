import {Link} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>PostJsonPlaceholderPage'</Link></li>
                <li><Link to={'dummyjson'}>PostDumMyJsonPage'</Link></li>
            </ul>
        </div>
    );
};

export default PostsPage;