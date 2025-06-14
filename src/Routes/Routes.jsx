import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Upcoming from "../Pages/Upcoming";
import ManageEvents from "../Pages/ManageEvents";
import JoinedEvents from "../Pages/JoinedEvents";
import CreateEvents from "../Pages/CreateEvents";
import Error from "../Pages/Error";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/upcoming',
                Component:Upcoming
            },
            {
                path:'/create',
                Component:CreateEvents
            },
            {
                path:'/manage',
                Component:ManageEvents
            },
            {
                path:'/joined',
                Component:JoinedEvents
            },
            {
                path:'/*',
                Component:Error
            },
            {
                path:'/auth',
                Component:AuthLayout,
                children:[
                    {
                        path:'/auth/login',
                        Component:LogIn
                    },
                    {
                        path:'/auth/signup',
                        Component:SignUp
                    }
                ]
            }
        ]
    }
    
])
