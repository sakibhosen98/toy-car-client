import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'detail/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`https://toy-car-server-gamma.vercel.app/carServices/${params.id}`)
      },
      {
        path: 'toys/:id',
        element: <SingleToy></SingleToy>
      }
    ]
  },
]);

export default router;