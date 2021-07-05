import React from 'react';
import './Overview.css';
import overview from './images/overview.jpg';

const Overview=()=>{
    return(
        <>
        <div className='overviewpage'>

            <div className='overviewp3'>
                <div className='p1'>
                    <h3>PLANNING</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>

                    <div className='p1'>
                    <h3>DEVELOPMENT</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>

                    <div className='p1'>
                    <h3>CONSULTING</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
            </div>
            <div className='overviewimage'>
                <img src={overview} alt='hh'className='img3'/>

                
            </div>

        </div>
        </>
    )
}
export default Overview;