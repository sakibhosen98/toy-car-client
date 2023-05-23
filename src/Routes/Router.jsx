import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import SingleData from "../Pages/AllToys/AllToyData";
// import AddToys from "../Pages/AllToys/AddToys";

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
        path: '/alltoys',
        element: <SingleData></SingleData> ,
        loader: () => fetch('http://localhost:5000/carServices')
      },
      // {
      //   path: '/alltoys',
      //   element: <AddToys></AddToys>,
      //   loader: () => fetch('http://localhost:5000/carServices')
      // },
      
      
    ]
  },
]);

export default router;