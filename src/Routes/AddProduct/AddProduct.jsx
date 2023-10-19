import Navbar from "../../Pages/Navbar/Navbar";


const AddProduct = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative">
            <div className="relative">
                <img src="https://i.ibb.co/5GRsMKz/11.png" className="" alt="" />
            </div>
            <div className="absolute top-16 md:top-32 max-w-4xl mx-auto left-6 md:left-16 lg:left-40 bg-[#F4F3F0]">
                <h1 className="text-2xl md:text-4xl font-semibold text-center text-blue-950 pt-8">Add a Coffee</h1>
                <form onSubmit={handleAddCoffee} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter Coffee supplier" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter Coffee taste" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter Coffee category" className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter Coffee details" className="input input-bordered lg:w-96" required />
                        </div>
                    </div>
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered mb-5" required />
                    <input type="submit" className="btn btn-primary normal-case" value="Add Coffee" />

                </form>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;