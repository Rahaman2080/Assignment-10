import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {brand,image, name, price, rating, type} = product || {};

    return (
        <div className="">
            <div className="card w-66 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>{name}</p>
                        <p>{type}</p>
                        <h2 className="card-title">{brand}</h2>
                        <div className="flex justify-center items-center gap-4">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500"  />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                        </div>
                        <div>
                            <p>Rating: {rating}</p>
                        </div>
                        </div>
                        <p>price: ${price}</p>
                        <div className="card-actions">
                            <Link to='/details'>
                            <button className="btn btn-primary normal-case btn-outline btn-sm">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;