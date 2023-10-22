import Swal from "sweetalert2";



const Detail = ({detail}) => {
    const {brand,image, name, price, rating, type, details } = detail || {};

    const handleAddCart = () =>{
        const myCart = {brand,image, name, price, rating, type, details }
        console.log(myCart);

        // send data to the server
        fetch('http://localhost:5000/addcart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        text: 'Product added to myCart successful!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex flex-col md:flex-row gap-5 m-6 md:m-0">
                    <figure className="">
                        <img src={image} alt="image" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">{name}</p>
                        <p className="text-xl font-bold text-rose-500">Type: {type}</p>
                        <p><span className="text-lg font-semibold">Details:</span> {details}</p>
                        <h2 className="card-title">Brand: {brand}</h2>
                        <div className="flex gap-4">
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
                            <button onClick={handleAddCart} className="btn btn-primary normal-case btn-outline btn-sm">Add to Cart</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Detail;