import { useEffect, useState } from "react";
import Cards from "../Home/Cards/Cards";

const Brands = () => {
   const [datas, setDatas] = useState([]);

   useEffect(()=>{
    fetch('https://brand-shop-server-m0inxequ4-abdur-rahmans-projects-9a7b6bad.vercel.app/brands')
    .then(res => res.json())
    .then(data => setDatas(data));
   })
  
    return (
        <div>
            <div className="text-center py-6">
                <h1 className="text-2xl md:text-4xl font-bold text-blue-700 py-3">There are {datas.length} Brands For You </h1>
                <p>To see the available products, click on the brands.</p>
                </div>
                <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-32 py-8">
                {
                    datas.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Brands;