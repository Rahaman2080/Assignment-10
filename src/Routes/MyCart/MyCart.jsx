import { useLoaderData } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Cart from "./Cart";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const MyCart = () => {
    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-xl md:text-3xl font-bold text-center py-8">You added {carts.length} carts </h1>
            <div>
                {loadedCarts.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto m-6">
                        {
                            carts.map(cart => <Cart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}
                            ></Cart>)
                        }
                    </div> :
                    <div className="grid justify-center items-center">
                        <div className="card w-72">
                            <div className="card-body text-center">
                                <AiOutlineShoppingCart className="text-[100px] text-center ml-16" />
                                <h2 className="card-title text-rose-600 text-2xl md:text-3xl lg:text-4xl">You did not add any cart</h2>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;

