import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import CloseIcon from '@material-ui/icons/Close';
import logo from './images/logo.gif';


const Navbar=()=>{
    const [active,setactive]=useState(true);

    const showhide=()=>{
        setactive(!active);
        console.log(active);
    }

    const Show={
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '12',
    border: '2px solid black',
    width: 'min(60vw ,250px)',
    // height: '100vh',
    display: 'grid',
    gridTemplatecolumns: '50px',
    gridTemplaterows: '10% 90%',
    
    }

    const hide={
        display:'none'
    }
    
    return(
        <>
        <header className='header'>
            <img src={logo} alt=" brand logo" onClick={showhide} className="logo"/>
            <button className='btn2' onClick={showhide}>&#9776;</button>
        </header>
        <div className='navbar' style={active?Show:hide}>
            <button className='btn1' onClick={showhide}>Menu <CloseIcon className='close'/> </button>
        <ul>
            <li><NavLink exact activeClassName='active' className='navlink' to='/'>Home</NavLink></li>
           <li><NavLink exact activeClassName='active'  className='navlink' to='/about'>About</NavLink></li> 
           <li><NavLink exact activeClassName='active'  className='navlink' to='/overview'>Overview</NavLink></li> 
           <li><NavLink exact activeClassName='active'  className='navlink' to='/consulting'>Consulting</NavLink></li> 
           <li><NavLink exact activeClassName='active'  className='navlink' to='/strategies'>Strategies</NavLink></li> 
           <li><NavLink exact activeClassName='active'  className='navlink' to='/clints'>Our Clints</NavLink></li> 
           <li><NavLink exact activeClassName='active'  className='navlink' to='/contact'>Contact Us</NavLink></li> 
        </ul>
        </div>
        </>
    )
}
export default Navbar;