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
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/Products/UpdateProduct/UpdateProduct";
  
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
            loader: () => fetch('https://brand-shop-server-gold.vercel.app/brands')
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
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch('https://brand-shop-server-gold.vercel.app/mycart')
        },
        {
            path: '/products/:brand',
            element: <Products></Products>,
            loader: ({params})=> fetch(`https://brand-shop-server-gold.vercel.app/products/${params.brand}`)
        },
        {
            path: '/productDetails/:id',
            element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://brand-shop-server-gold.vercel.app/productdetails/${params.id}`)
        },
        {
            path: '/updateProducts/:id',
            element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader: ({params})=> fetch(`https://brand-shop-server-gold.vercel.app/productsById/${params.id}`)
        }
       
      ]
    },
  ]);
  export default router;