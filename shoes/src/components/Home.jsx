import React from 'react';
import './Css/Home.css';
import shoe from './Css/Images/shoe.png';
import Footer from './Footer';

const Home = () => {
    
    return (
        <>
        <div className="Hbackground">
            <div className="Hmain">

            <div className='Htext'>
                <h1><span className='Hspan'>New Running Shoes</span></h1>
                <h1>Men's Like Plex</h1>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="Hbuttons">
                <button className="Hbtn1">Buy Now </button>
                <button className="Hbtn2">See More </button>
                </div>
            </div>
            <div className='Himage'>
                <img src={shoe} alt="show" className='Himg'/>
            </div>

            </div>
            <Footer />
        </div>
        
        </>
    )
}

export default Home
