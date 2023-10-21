
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider";
import Product from "./Product";


const Products = () => {

    const products = useLoaderData();
    console.log(products);


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center text-3xl font-bold py-6">Advertisement</h1>
                <div>
                <Slider></Slider>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-8">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;

