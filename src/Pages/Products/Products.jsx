
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider";


const Products = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center text-3xl font-bold py-6">Advertisement</h1>
                <div>
                <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default Products;

