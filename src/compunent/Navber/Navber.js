import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
    LinkProps
  } from "react-router-dom";
  
import logo from './../../images/globetech logo.png'
import './Navber.css'

const Navber = () => {

    function CustomLink({ children, to, ...props }) {
      let resolved = useResolvedPath(to);
      let match = useMatch({ path: resolved.pathname, end: true });
      return (
        <div >
          <Link
            style={{ color: match ? "#CBF231" : "#2EBBE5" }}
            to={to}
            {...props}
          >
            {children}
          </Link>
       
        </div>
      );
    }
    return (
        <div className='nav'>
           <nav className='navber'>
            <div className='logo'>
                <img src={logo} alt=""  />
            </div>
            <div>
                <ul>
                    <li><CustomLink to="/">Home</CustomLink></li>
                    <li><CustomLink to="service">Service</CustomLink></li>
                    <li><CustomLink to="login">Login</CustomLink></li>
                    
                </ul>
            </div>
           </nav>
            
        </div>
    );
};

export default Navber;