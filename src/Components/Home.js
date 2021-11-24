import React from "react";

//import comps
import Navbar from './Navbar';
import MikiKala from './MikiKala';
import CategoryCards from "./CategoryCards";
import LoginSection from "./LoginSection";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <MikiKala />
            <CategoryCards />
            <LoginSection />
            <Footer />
        </>
    )
}

export default Home;