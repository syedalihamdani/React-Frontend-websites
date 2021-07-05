import React from 'react';
import  './Clints.css';
import image0 from './images/slids/0.jpg';
import image1 from './images/slids/1.jpg';
import image2 from './images/slids/2.jpg';


  const Clints=()=>{

  return (
    <>
      <div className="container">
 <div className="wrapper">
   <div className="slider-holder">
     <div id="slider_image_1"><img src={image0} alt='1' /> </div>
     <div id="slider_image_2"><img src={image1} alt='1'/></div>
     <div id="slider_image_3"><img src={image2} alt='1' /></div>
   </div>
 </div>
 <div className="button-holder">
   <a href="#slider_image_1" className="dots" >a</a>
   <a href="#slider_image_2" className="dots" >a</a>
   <a href="#slider_image_3" className="dots" >a</a>
 </div>
</div>

    </>
  )
}

export default Clints;
