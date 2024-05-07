import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Page/Home";
import Login from "../Component/Page/Login/Login";
import Register from "../Component/Page/Register/Register";
import Author from "../Component/Page/Author/Author";
import CourseDetails from "../Component/Page/CourseDetails/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../Component/Page/About/About";
import PricingPlans from "../Component/Page/PricingPlans/PricingPlans";
import ErrorPage from "../Component/Page/ErrorPage/ErrorPage";
import Dashboard from "../Component/Page/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            // loader:()=>fetch('/categories.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/course/:id",
          element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://education-care-backend.vercel.app/course/${params.id}`)
        },
        {
          path:"/",
          element:<Author></Author>,
          loader:()=>fetch('/author.json')
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path:"pricing",
          element:<PricingPlans></PricingPlans>,
          loader:()=>fetch('/price.json')
        }
      ]
    },
  ]);

export default router;