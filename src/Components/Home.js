import React from "react";

//import comps
import Navbar from './Navbar';
import MikiKala from './MikiKala';
import CategoryCards from "./CategoryCards";
import LoginSection from "./LoginSection";

const Home = () => {


    return (
        <>
            <MikiKala />
            <CategoryCards />
            <LoginSection />
        </>
    )
}

export default Home;