import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Detail from "./Detail";

const ProductDetails = () => {

    const productDetails = useLoaderData();
    
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-2xl md:text-4xl font-bold text-center my-6">Product details:</h1>
            <div className="max-w-3xl mx-auto m-6">
                <Detail detail={productDetails}></Detail>
            </div>
        </div>
    );
};

export default ProductDetails;