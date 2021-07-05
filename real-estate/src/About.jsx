import React from 'react';
import './About.css';
import Aboutimage from './Images/About.jpg';
import {NavLink} from 'react-router-dom';


const About=()=>{
  return(
    <>
    <main className='aboutpage'>

  <div className="text">
    <h3>An unique business experience</h3>
    <br /><br />
    <h1 className="h12">What is it About </h1>
    <br />
    <p>  Property dealing Agency is developing one of the <br />most comprisive 
      national business match making platform.Where<br /> business people, investers
      decision makers from all over<br /> the world can find new business partners 
      companies &amp; investers.
    </p>
    <br/><br/><br/>
    
  <NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/Plans"> <button className="btn4">More</button> </NavLink>

  </div>
    <div id="About" className="image">
  <img src={Aboutimage} alt="Property dealar" title="Property dealar" />
</div>
    </main>



    </>
  )
}
export default About;