

const ExtraSection2 = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold py-5">Especial Brands Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-5">
                {/* especial products */}
                <div className="card w-66 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/N2W2fpr/Loreal-Shampoo.webp" alt="Shoes" className="h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Elvive Color protect</p>
                        <h2 className="card-title">Loreal Brand</h2>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                        </div>
                        <p>price: $-200</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline btn-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-66 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/YdLSYNw/scent.jpg" alt="Shoes" className="h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Hair Treatment</p>
                        <h2 className="card-title">Ravlon</h2>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                        </div>
                        <p>price: $-250</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline btn-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-66 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/9g25W8S/Ravlon-Products.webp" alt="Shoes" className="h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Longware mekup</p>
                        <h2 className="card-title">Ravlon</h2>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                        </div>
                        <p>price: $-250</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline btn-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-66 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/VH5htNZ/Dior-Product.webp" alt="Shoes" className="h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Oud Ispahan</p>
                        <h2 className="card-title">Dior Brand</h2>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-500" />
                        </div>
                        <p>price: $-250</p>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline btn-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;