import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import UsersDumMyJsonPage from "./pages/UsersDumMyJsonPage.tsx";
import PostsDumMyJsonPage from "./pages/PostsDumMyJsonPage.tsx";
import UserDumMyJsonLayout from "./layouts/UserDumMyJsonLayout.tsx";
import SingleUserDumMyJsonPage from "./pages/SingleUserDumMyJsonPage.tsx";
import PostDumMyJsonLayout from "./layouts/PostDumMyJsonLayout.tsx";
import SinglePostDumMyJsonPage from "./pages/SinglePostDumMyJsonPage.tsx";

const routes = createBrowserRouter([
        {path: '/', element:<MainLayout/>, children:[
                {path: '', element: <UsersPage/>, children: [
                    {path: 'users', element:<UsersDumMyJsonPage/>}
                ]},
                {path: '', element: <PostsPage/>, children:[
                    {path: 'posts', element:<PostsDumMyJsonPage/>}
                ]},

        ]},
        {path: '/user/dummyjson', element: <UserDumMyJsonLayout/>, children: [
                {path: 'deteils/:id', element: <SingleUserDumMyJsonPage/>}
        ]},
        {path: 'post/dummyjson', element:<PostDumMyJsonLayout/>, children: [
    {path: 'deteils/:id', element: <SinglePostDumMyJsonPage/>}
]}



])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
