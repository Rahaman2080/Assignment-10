
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import ExtraSection from "../ExtraSection";
import ExtraSection2 from "../ExtraSection2";
import Navbar from "../Navbar/Navbar";


const Home = () => {


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="bg-base-300">
                <Brands></Brands>
            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>
            <div>
                <ExtraSection2></ExtraSection2>
            </div>
        </div>
    );
};

export default Home;