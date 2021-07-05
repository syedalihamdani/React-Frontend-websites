import React, { useEffect, useState } from 'react';
import './Css/Navbar.css';
import logo from './Css/Images/logo.png';
import {NavLink} from 'react-router-dom';
const style3={
  position:"absolute",
  right:"5px",
  top:"8%",
  listStyle:"none",
 
}
const listStyle={
  textAlign:"center",
  background:"white",
  fontSize:"23px",
  fontWeight:"Bold",
  borderRadius:"8px",
  borderBottom:"8px",
  padding:"5px",
//   border:"2px solid black"
};

const List=(props)=>{
  return  (<ul style={props.style}
  >
  <li style={listStyle}><NavLink exact activeclassName="active" style={{textDecoration:"none"}} to="/"> Home</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/shoes">Shoes</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/racing_boots">Racing Boots</NavLink></li>
  <li style={listStyle}><NavLink exact activeClassName="active" style={{textDecoration:"none"}} to="/contact">Contact Us</NavLink> </li>
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
    }}
     onClick={()=>{
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
  window.matchMedia('(max-width:1025px)').matches
);
 useEffect(()=>{
   window.addEventListener("resize",()=>{
     setismobile( window.matchMedia('(max-width:1025px)').matches);
   })
 })
  return(
    <>
    <nav style={{
       width:'100vw',
      display:'grid',
      gridTemplateColumns:'50% 50%',
      alignItems:'center',
      backgroundColor:'#080808',
      position:"absolute",
      top:"0px",
      left:"0px"
    }}>
      <img src={logo} alt="logo"
      style={{
        width:"40px",
        height:"40px",
        padding:"0 23px"

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