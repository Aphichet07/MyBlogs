import { useState } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";


function HomePage(){

    return (
        <>
            <Header/>
            <div className="font-bold">
                Hello I'm Bank
            </div>
        
            <Footer/>
        </>
    )

}

export default HomePage;