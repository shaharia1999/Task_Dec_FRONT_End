import React from 'react';
import logo from './../../images/globetech logo.png'
import './Navber.css'

const Navber = () => {
    return (
        <div className='nav'>
           <nav className='navber'>
            <div className='logo'>
                <img src={logo} alt=""  />
            </div>
            <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
           </nav>
            
        </div>
    );
};

export default Navber;