import React from 'react'
import './Css/Shoe.css';
import Footer from './Footer';
import shoe1 from './Css/Images/1.jpg';
import shoe2 from './Css/Images/2.jpg';
import shoe3 from './Css/Images/3.jpg';
import shoe4 from './Css/Images/4.jpg';
import shoe5 from './Css/Images/5.jpg';
import shoe6 from './Css/Images/6.jpg';





const Shoes = () => {
    return (
        <div className="Spage">
            <div className="Smain">
                <div className="Scard">
                    <img src={shoe1} alt="shoe" className='Simg'/>
                </div>
                <div className="Scard">
                <img src={shoe2} alt="shoe" className='Simg'/>
                    </div>
                    <div className="Scard">
                    <img src={shoe3} alt="shoe" className='Simg'/>
                    </div>
                    <div className="Scard">
                    <img src={shoe4} alt="shoe" className='Simg'/>
                    </div>
                    <div className="Scard">
                    <img src={shoe5} alt="shoe" className='Simg'/>
                    </div>
                    <div className="Scard">
                    <img src={shoe6} alt="shoe" className='Simg'/>
                    </div>
            </div>
            <div className='Sbuy'>
                <button className="Sbutton">BUY NOW</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Shoes
