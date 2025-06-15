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
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";
import EventDetails from "../Pages/EventDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/upcoming',
                Component: Upcoming,
                loader: () => fetch('http://localhost:5000/events'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/create',
                element: <PrivateRoute>
                    <CreateEvents></CreateEvents>
                </PrivateRoute>
            },
            {
                path: '/manage',
                element: <PrivateRoute>
                    <ManageEvents></ManageEvents>
                </PrivateRoute>
            },
            {
                path: '/joined',
                element: <PrivateRoute>
                    <JoinedEvents></JoinedEvents>
                </PrivateRoute>
            },
            {

                path: '/details/:id',
                element: <PrivateRoute>
                    <EventDetails></EventDetails>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/events/${params.id}`)



            }
            ,
            {
                path: '/*',
                Component: Error
            },
            {
                path: '/auth',
                Component: AuthLayout,
                children: [
                    {
                        path: '/auth/login',
                        Component: LogIn
                    },
                    {
                        path: '/auth/signup',
                        Component: SignUp
                    }
                ]
            }
        ]
    }

])
