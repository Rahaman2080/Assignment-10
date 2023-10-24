import { AiOutlineDelete } from 'react-icons/ai'
import Swal from 'sweetalert2';

const Cart = ({cart, carts, setCarts}) => {
    const {brand,image, name, price, rating, type, _id } = cart || {};

    const handleDelete = id => {
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`https://brand-shop-server-gold.vercel.app/myCart/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Cart has been deleted',
                            'success'
                        )
                        const remaining = carts.filter(have => have._id !== _id);
                        setCarts(remaining);
                    } 
                })
            }
        })
    }

    return (
        <div>
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
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-rose-500" />
                        </div>
                        <div>
                            <p>Rating: {rating}</p>
                        </div>
                        </div>
                        <p>price: ${price}</p>
                        <div className="card-actions gap-8">
                            <button onClick={()=> handleDelete(_id)} className="btn btn-primary btn-outline"><AiOutlineDelete className='w-10 h-10'></AiOutlineDelete></button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Cart;