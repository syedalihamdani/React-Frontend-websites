import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './Images/logo1.jpg';
import {NavLink} from 'react-router-dom';
const style3={
  position:"absolute",
  right:"5px",
  top:"8%",
  listStyle:"none"
};

const listStyle={
  textAlign:"center",
  background:"white",
  borderRadius:"8px",
  borderBottom:"8px",
  padding:"5px",
};

const List=({style})=>{
  return  (<ul style={style}
  >
  <li style={listStyle}><NavLink exact activeclassName="active" style={{textDecoration:"none"}} to="/"> Home</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/About">About</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/Plans">Plans</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/Contact">Contact Us</NavLink> </li>
  </ul>
  )
};

const Mobilelist=()=>{
  const [active,setactive]=useState(false);
  return(
    <>
    <button style={{
      width:"50%",
      justifySelf:"end"
    }} onClick={()=>{
      setactive(!active)
    }

    }
    >
      {active ? "Close" : "Show"}&#9776;
    </button>
    {active && <List style={style3}/>}
    </>
  )
}

const Navbar=()=>{
const [ismoblie,setismobile]=useState(
  window.matchMedia('(max-width:768px)').matches
);
 useEffect(()=>{
   window.addEventListener("resize",()=>{
     setismobile( window.matchMedia('(max-width:768px)').matches);
   })
 })
  return(
    <>
    <nav style={{
      display:'grid',
      gridTemplateColumns:'10% 90%',
      alignItems:'center',
      backgroundImage:'linear-gradient(to left,blue,lightblue,white)',
    }}>
      <img src={logo} alt="logo"
      style={{
        width:"40px",
        height:"40px"

      }}
      />

      {ismoblie ? <Mobilelist/> : <List
      style={{
        display:'flex',
        justifyContent:"space-evenly",
        listStyle:"none",
        paddingRight:"10px"
    
      }
    }
      />}
     
    </nav>
    </>
  )
}
export default Navbar;