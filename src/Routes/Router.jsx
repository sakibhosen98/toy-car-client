import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy";

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'toy/:id',
        element: <AllToys></AllToys>,
        loader: ({params}) => fetch(`http://localhost:5000/carServices/${params.id}`)
      },
      {
        path: 'toys/:id',
        element: <SingleToy></SingleToy>
      }
    ]
  },
]);

export default router;