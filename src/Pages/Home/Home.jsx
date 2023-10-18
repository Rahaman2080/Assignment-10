import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Cards from "./Cards/Cards";


const Home = () => {
    const loadedData = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="bg-base-300">
                <div className="text-center py-6">
                <h1 className="text-2xl md:text-4xl font-bold text-blue-700 py-3">There are {loadedData.length} Brands For You </h1>
                <p>To see the available products, click on the brands.</p>
                </div>
                <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-32 py-8">
                {
                    loadedData.map(card => <Cards key={card.brand_id} card={card}></Cards>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Home;