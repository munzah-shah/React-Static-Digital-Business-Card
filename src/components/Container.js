import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Container() {
    return(
        <div className="inner-container">
            <Info />
            <div className="bottom">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>        
    )
}