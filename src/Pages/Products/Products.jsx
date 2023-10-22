
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider";
import Product from "./Product";


const Products = () => {

    const products = useLoaderData();

    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center text-3xl font-bold py-6">Advertisement</h1>
                <div>
                <Slider></Slider>
                </div>
                <h1 className="text-3xl font-bold text-center pt-5">Brand Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;

