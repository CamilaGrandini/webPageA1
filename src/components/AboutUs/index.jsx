import React from "react";
import movie from "../../assets/movies.png"
import './style.css'

class AboutUs extends React.Component {
    render() {
        return (

            <main className="about-component">
                <div className='about-us'>
                    <h1>About Us</h1>

                    <p>CamiFlix is a streaming platform with all the movies you can imagine. With only $5 per month you can enjoy thousands of movies and tv shows.
                        Subscribe today and receive a 1 month free.
                    </p>
                    <img src={movie} className="center" />
                </div>
            </main>

        )
    }
}

export default AboutUs;