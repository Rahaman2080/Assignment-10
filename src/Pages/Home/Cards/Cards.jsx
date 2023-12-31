import { Link } from "react-router-dom";

const Cards = ({ card }) => {
    const { brand_name, brand_image } = card || {};


    return (
        <div className="">
            <Link to={`/products/${brand_name}`}>
                <div className="card bg-purple-300 mx-auto md:w-72 shadow-1xl">
                    <figure><img src={brand_image} alt="No image" className="h-52 w-full" /></figure>
                    <div className="card-body text-center items-center">
                        <h2 className="text-xl font-bold text-purple-700">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;