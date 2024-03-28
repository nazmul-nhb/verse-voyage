import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="mx-4 text-[#131313]">
            <Helmet>
                <title>Home : : Verse Voyage</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;