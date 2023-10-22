import { useLoaderData } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Cart from "./Cart";


const MyCart = () => {
    const carts = useLoaderData();
    
    
    return (
        <div>
            <Navbar></Navbar>
            <h1>Your added carts: {carts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto m-6">
            {
              carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
            }
            </div>
        </div>
    );
};

export default MyCart;