import {Link} from "react-router-dom";
import HomePage from "../../pages/HomePage.tsx";
import UsersPage from "../../pages/UsersPage.tsx";
import PostsPage from "../../pages/PostsPage.tsx";
import CommentsPage from "../../pages/CommentsPage.tsx";
import ProductsPage from "../../pages/ProductsPage.tsx";

const MenuComponent = () => {
    return (
        <div>
            {
                <ul>
                    <li><Link to={''}><HomePage/></Link></li>
                    <li><Link to={'users'}><UsersPage/></Link></li>
                    <li><Link to={'posts'}><PostsPage/></Link></li>
                    <li><Link to={'comments'}><CommentsPage/></Link></li>
                    <li><Link to={'products'}><ProductsPage/></Link></li>
                </ul>
            }

        </div>
    );
};

export default MenuComponent;