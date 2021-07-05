import React from 'react';
import './Home.css';
import Homeimage from './Images/home.jpg';
import {NavLink} from 'react-router-dom'


const Home=()=>{
  return(
    <>
    {/* <div className='homepage'> */}

<main className='main1'>

    <div id="img" className='image'>
  <img src={Homeimage} alt="Image"></img>
  </div>

  <div className="text">
  <h3>Where your profits goes skyhigh</h3>
  <br /><br /><br /><br />
  <h1 className="h11">Welcome to </h1>
  <br />
  <h1> Real Estate Business Agency </h1>
  <div>
  <br /><br />
</div>

  <br />
 
  <NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/About"> <button className="btn2">Read more</button></NavLink>

</div>
  </main>

    {/* </div> */}
    </>
  )
}
export default Home;