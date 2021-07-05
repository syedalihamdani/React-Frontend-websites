import React from 'react'
import Footer from './Footer';
import './Css/Racingboots.css';
import boots from './Css/Images/boots.png';
const Racing_boots = () => {
    return (
        <>
        <div className='Rpage'>
            <div className='Rmain'>
                <div className='Rheading'>
                <h1>Racing Boots</h1>
                </div>
                <div className='Rtext'>
                    <h1>Racing Boots</h1>
                    <p>Racing Bootsconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
                <div className="Rsale">
                <div className='Rimage'>
                    <img src={boots} alt="boots" className="Rimg"/>
                </div>
                <div className=' Rtext2'>
                    <h1><span className="Rcolor">Sale</span></h1>
                    <h1>JOGING</h1>
                    <h1><span className="Rcolor">SHOES</span></h1>
                    <h1><span className="Rcolor">$</span>&nbsp;100</h1>
                    <button className='Rbtn1'>See More</button>
                </div>
             </div>

            </div>
            <Footer/>
        </div>
            
        </>
    )
}

export default Racing_boots;
