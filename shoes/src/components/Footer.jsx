import React from 'react'

const Footer=()=>{
    const footerstyle={
        width:'100vw',
        height:'50px',
        // border:"2px solid black",
        textAlign:"center",
        fontSize:"23px",
        fontWeight:"bold",
        backgroundColor:"rgb(249 89 89)",
        color:"white",
        position:"fixed",
        bottom:"0px",
        left:"0px"
    }
    return(
        <>
<div style={footerstyle}>
  <p>Copywright© 2021:All wrights are reserved.</p>
</div>

        </>
    )
}


export default Footer;
