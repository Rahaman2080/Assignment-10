import { useEffect, useState } from "react";
import Cards from "../Home/Cards/Cards";

const Brands = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-gold.vercel.app/brands')
            .then(res => res.json())
            .then(data => setDatas(data));
    })

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="text-center py-6">
                <h1 className="text-2xl md:text-4xl font-bold text-purple-500 py-3">Exclusive Brands</h1>
                <p>To see the available products, click on the brands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    datas.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Brands;

 