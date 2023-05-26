import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToy from "../pages/MyToy/MyToy";
import EditToy from "../pages/EditToy/EditToy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: '/add_a_toy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {

          path: "/all_toys",
          element: <AllToys></AllToys>,
          loader: () => fetch('https://superfinity-server.vercel.app/toy')
        },
        {
          path: '/toy/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://superfinity-server.vercel.app/toy/${params.id}`)
        },
        {
          path: '/my_toy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path: "/toy/edit/:id",
          element: <PrivateRoute><EditToy></EditToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://superfinity-server.vercel.app/toy/${params.id}`)
        }
    ]
  },
]);


export default router;