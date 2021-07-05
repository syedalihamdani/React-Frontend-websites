import React from 'react';
import './Contact.css';
import contact from './Images/Contacts.jpg';


const Contact=()=>{
  return(
    <>
    <main className='contactpage'>
    <div id="Contacts" className="image">
  <img src={contact} alt="Property dealar" title="Property dealar" />
</div>
  <div className="text">
    <h1>We speak your language</h1>
    <br /><br />
    <p>Phone:+92-300-0154815 <br /><br /><br />
      Address:Pakistan,Punjab,Kasur street:noor wali,Appartment no:34 <br /><br /><br />
      E.mail:alihamdani61@yahoo.com</p>
  </div>
    </main>
    </>
  )
}
export default Contact;