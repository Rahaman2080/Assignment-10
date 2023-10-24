import { useLoaderData } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const products = useLoaderData();
    const { brand, image, name, price, rating, type, details, _id } = products || {};
 

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const image = form.image.value;
        const addedProduct = { name, brand, type, price, rating, details, image }
        console.log(addedProduct);

        // send data to the server for update
        fetch(`https://brand-shop-server-gold.vercel.app/productsById/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        text: 'Product Updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto rounded-xl shadow-2xl bg-[#F4F3F0] my-6">
                <h1 className="text-2xl md:text-4xl font-semibold text-center text-blue-950 pt-8">Update Products</h1>
                <form onSubmit={handleAddProduct} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Product name" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <div className="input-group">
                                <select type="select" name="brand" defaultValue={brand} className="select select-bordered w-96">
                                    <option disabled selected>Brand Name</option>
                                    <option value="Loreal">Loreal</option>
                                    <option value="Revlon">Revlon</option>
                                    <option value="Avon">Avon</option>
                                    <option value="EsteeLauder">EsteeLauder</option>
                                    <option value="UrbanDecay">UrbanDecay</option>
                                    <option value="Dior">Dior</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" name="type" defaultValue={type} placeholder="Enter Type" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter price" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter Rating" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="Enter Short description" className="input input-bordered lg:w-96" />
                        </div>
                    </div>
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered mb-5" required />
                    <input type="submit" className="btn btn-primary btn-outline normal-case" value="Update Product" />

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;