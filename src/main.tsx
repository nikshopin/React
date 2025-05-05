import { createRoot } from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UsersJsonPlaceholderPage from "./pages/UsersJsonPlaceholderPage.tsx";
import UsersDumJsonPage from "./pages/UsersDumJsonPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import PostsDumMyJsonPage from "./pages/PostsDumMyJsonPage.tsx";
import PostsJsonPlaceholderPage from "./pages/PostsJsonPlaceholderPage.tsx";
import UserLayout from "./layouts/UserLayout.tsx";
import CommentJsonPlaceholderPage from "./pages/CommentJsonPlaceholderPage.tsx";
import CommentDumMyJsonPage from "./pages/CommentDumMyJsonPage.tsx";

const routes = createBrowserRouter([
    {path: '/', element:<MainLayout/>, children: [
            {path:'', element:<HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts/jsonplaceholder', element: <PostsJsonPlaceholderPage/>},
            {path:'posts/dummyjson', element: <PostsDumMyJsonPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>,children:[
                    {path:'commentsjsonplaceholder', element: <CommentJsonPlaceholderPage/>},
                    {path:'commentsdummyjson', element: <CommentDumMyJsonPage/>},
                ]},
            {path:'products', element:<ProductsPage/>},

    ]},
    {path: '/users',element: <UserLayout/>, children:[
            {path:'jsonplaceholder', element: <UsersJsonPlaceholderPage/>},
            {path:'dummyjson', element: <UsersDumJsonPage/>},
        ]},


])


createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>);
