import React from 'react';
import './Strategies.css';
import strategies from './images/strategies.jpg';

const Strategies=()=>{
    return(
        <>
        <div className='Sfull'>

        <div className='Smain'>
            <div className='Stext'>
                <h1>Strategy</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                <br/>
                <button className='Sbtn1'>LEARN MORE</button>

            </div>
            <div className='Sdiv2'>
                <div className='Simage'>
<img className='Simg' src={strategies} alt='Strtegies' title='Strategy'/>
                </div>
                <div className='Sdesign'>

                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Strategies;
