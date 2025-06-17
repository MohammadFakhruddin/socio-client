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
import UpdateEvent from "../Pages/UpdateEvent";

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
                loader: () => fetch('https://socio-server.vercel.app/events'),
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
                loader: ({ params }) => fetch(`https://socio-server.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>



            }
            ,
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <UpdateEvent></UpdateEvent>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://socio-server.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>


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
