import {
    createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "./Register/Register";
import PrivateRoute from "./PriveteRout/PrivateRoute";
import AddProduct from "./AddProduct/AddProduct";
import MyCart from "./MyCart/MyCart";
import Brands from "../Pages/Brands/Brands";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/brands',
            element: <Brands></Brands>,
            loader: () => fetch('http://localhost:5000/brands')
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addProducts',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path: '/myCarts',
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
       
      ]
    },
  ]);
  export default router;