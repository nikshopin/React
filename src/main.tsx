import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import CommentsPage from "./components/CommentsPage/CommentsPage.tsx";
import UsersPlaceholderPage from "./pages/UsersPlaceholderPage.tsx";
import UsersDumMyJsonPage from "./pages/UsersDumMyJsonPage.tsx";
import PostsPlaceholderPage from "./pages/PostsPlaceholderPage.tsx";
import PostsDumMyJsonPage from "./pages/PostsDumMyJsonPage.tsx";
import CommentsPlaceholderPage from './pages/CommentsPlaceholderPage.tsx';
import CommentsDumMyJsonPage from "./pages/CommentsDumMyJsonPage.tsx";

const routes = createBrowserRouter([
        {path: '/', element:<MainLayout/>, children:[
                {path: '', element: <HomePage/>},
                {path: 'users', element: <UsersPage/>, children: [
                        {path: 'jsonplaceholder', element:<UsersPlaceholderPage/>},
                        {path: 'dummyjson', element:<UsersDumMyJsonPage/>}
                    ]},
                {path: 'posts', element: <PostsPage/>, children:[
                                {path: 'jsonplaceholder', element:<PostsPlaceholderPage/>},
                                {path: 'dummyjson', element:<PostsDumMyJsonPage/>}
                        ]},
                {path: 'comments', element: <CommentsPage/>, children:[
                                {path: 'jsonplaceholder', element:<CommentsPlaceholderPage/>},
                                {path: 'dummyjson', element:<CommentsDumMyJsonPage/>}
                        ]},
        ]}

])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
