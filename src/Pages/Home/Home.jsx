import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="bg-base-300">
                <h1 className="text-4xl font-bold text-blue-700 text-center py-6">Our Brands</h1>
            </div>
        </div>
    );
};

export default Home;