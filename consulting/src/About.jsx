import React from 'react';
import './About.css';
import image from './images/about.jpg';


const About=()=>{
  return(
    <>
   <div className='aboutpage'>
     <div className='designtext'>
       <div className='design'> </div>
       <div className='text'>
         <h1>About Team</h1>
         <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
       </div>
     </div>
     <div className='image'>
     <img src={image} alt="Images" className='image'/>
     </div>
    
   </div>



    </>
  )
}
export default About;