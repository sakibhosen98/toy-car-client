import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import SingleData from "../Pages/AllToys/AllToyData";
import NotFound from "../Pages/NotFound/NotFound";
import AddToys from "../Pages/MyToys/AddToys";
import SingleToy from "../Pages/AllToys/SingleToy";
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
        loader: () => fetch('https://toy-car-server-gamma.vercel.app/carServices')
      },
      {
        path: 'singleToy/:id',
        element: <SingleToy></SingleToy>,
        loader: ({params}) => fetch(`http://localhost:5000/carServices/${params.id}`)
      },
      {
        path: '/mytoys',
        element: <AddToys></AddToys>,
        loader: () => fetch('https://toy-car-server-gamma.vercel.app/carServices')
      }
    ],
    errorElement: <NotFound></NotFound>
  },
]);

export default router;