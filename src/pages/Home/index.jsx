import React from "react";
import Header from "../../components/Header"
import AboutUs from "../../components/AboutUs"
import Form from "../../components/Form"
import Footer from "../../components/Footer"

const Home = () => {

    return (
        <div className='home-page'>
            <Header />
            <Form />
            <AboutUs />
            <Footer />
        </div>
    )

}

export default Home;