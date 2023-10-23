import { Link } from "react-router-dom";
import {  } from 'react-icons'
import { AiOutlineEdit } from "react-icons/ai";


const Product = ({product}) => {
    const {brand,image, name, price, rating, type, _id} = product || {};

    return (
        <div className="">
            <div className="card w-66 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="image" className="h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className="text-lg font-semibold">{name}</p>
                        <p className="text-xl font-bold text-rose-500">{type}</p>
                        <h2 className="card-title">Brand: {brand}</h2>
                        <div className="flex justify-center items-center gap-4">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500"  />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                        </div>
                        <div>
                            <p>Rating: {rating}</p>
                        </div>
                        </div>
                        <p>price: ${price}</p>
                        <div className="card-actions gap-8">
                            <Link to={`/productDetails/${_id}`}>
                            <button className="btn btn-primary normal-case btn-outline btn-sm">Details</button>
                            </Link>
                            <Link to={`/updateProducts/${_id}`}>
                            <button className="btn btn-primary btn-sm btn-outline"><AiOutlineEdit className="w-14 h-8"></AiOutlineEdit></button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;