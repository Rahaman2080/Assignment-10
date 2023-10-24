
import { Link, useLoaderData } from "react-router-dom";
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
                <div className="py-8">
                    {products.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                            {
                                products.map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                     : <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-purple-600">No products available in this brand</p>
                        <Link to="/">
                        <button className="my-5 btn btn-secondary btn-sm btn-outline normal-case">Go home</button>
                        </Link>
                     </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;

{/* <div className="w-full lg:w-1/4 pl-8 md:pl-0 mx-auto">
    <div className="text-center">
        <div className="card lg:w-96 mx-auto">
            <div className="card-body">
                <AiOutlineShoppingCart className="text-[100px] text-center ml-16" />
                <h2 className="card-title text-rose-700 text-3xl md:text-5xl lg:text-4xl">No products available</h2>
            </div>
        </div>
    </div>
</div> */}


