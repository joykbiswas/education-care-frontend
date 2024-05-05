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
          loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
          path:"/",
          element:<Author></Author>,
          loader:()=>fetch('/author.json')
        },
        {
          path:"/about",
          element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"pricing",
          element:<PrivateRoute><PricingPlans></PricingPlans></PrivateRoute>,
          loader:()=>fetch('/price.json')
        }
      ]
    },
  ]);

export default router;