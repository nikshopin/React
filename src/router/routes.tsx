import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UsersDumMyJsonPage from "../pages/UsersDumMyJsonPage.tsx";
import UserDumMyJsonLayout from "../layouts/UserDumMyJsonLayout.tsx";
import SingleUserDumMyJsonPage from "../pages/SingleUserDumMyJsonPage.tsx";

 export const routes = createBrowserRouter([
    {path: '/', element:<MainLayout/>, children:[
            {path: '', element: <UsersPage/>, children: [
                    {path: 'users', element:<UsersDumMyJsonPage/>},
                ]}
        ]},
    {path: '/user/dummyjson', element: <UserDumMyJsonLayout/>, children: [
            {path: 'deteils/:id', element: <SingleUserDumMyJsonPage/>}
        ]}
])