import React from 'react';
import './Plans.css';
import Single from './Images/Plans/Single.jpg';
import Double from './Images/Plans/Double.jpg';
import Appartment from './Images/Plans/Appartment.jpg';
import {NavLink} from 'react-router-dom';


const Plans=()=>{
  return(
    <>
    <main className="planspage">
    {/* <h1>Pricing Plans</h1> */}
      <div className="card">
        <img className="cardimg" src={Single} alt="Single Room" title="Double Room" />
        <div className='text'>
          <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <h5>Rent</h5> <br />
        <h5>$500/month</h5> <br />
        <h6>For Single Room</h6>
        <br />
  <NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/Contact"> <button className="btn3">Book Now</button> </NavLink>
        </div>
      </div>
      <div className="card">
        <img className="cardimg" src={Double} alt="Single Room" title="Double Room" />
        
        <div className='text'>
        <br/><br/> <br/><br/> <br/><br/> <br/>
        <h5>Rent</h5><br />

        <h5>$800/month</h5><br />

        <h6>For Double Room</h6>
        <br />
        
  <NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/Contact"> <button className="btn3">Book Now</button> </NavLink>

        </div>
      </div>
      <div className="card">
        <img className="cardimg" src={Appartment} alt="Single Room" title="Appartment Room" />
        
        <div className='text'>
        <h5>Rent</h5>
        <h5>$1200/month</h5>
        <h6>For Appartment</h6>
        <br />
        
  <NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/Contact"> <button className="btn3">Book Now</button> </NavLink>

        </div>
      </div>
    </main>


    </>
  )
}
export default Plans;