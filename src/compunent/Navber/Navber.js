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
  
import logo from './../../images/logo.PNG'
import logo2 from './../../images/logo2.PNG'
import './Navber.css'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Navber = () => {

    function CustomLink({ children, to, ...props }) {
      let resolved = useResolvedPath(to);
      let match = useMatch({ path: resolved.pathname, end: true });
      return (
        <div >
          <Link
            style={{ color: match ? "white" : "white" }}
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
                <ul className=' justify-center items-center'>
                    <li><CustomLink to="/">English</CustomLink></li>
                    <li><CustomLink to="/">Sing in</CustomLink></li>
     
                    
                </ul>
            </div>
            <div className='logo'>
              <div className='psocial'>
            <FaFacebookF className='social' />
            <AiOutlineTwitter className='social' />     
            </div>      
             <img src={logo2} alt=""  />
            </div>
           </nav>
            
        </div>
    );
};

export default Navber;