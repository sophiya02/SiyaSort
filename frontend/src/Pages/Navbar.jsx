import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Navlink from './Navlink';

import { Tooltip, IconButton } from '@material-ui/core'
import {Input,HowToReg,Menu} from '@material-ui/icons';
const Navbar = () => {
    const [showMediaIcon, setShowMediaIcon]=useState(false);
    
    return (
        <>
            <nav className="main-nav bg-light navbar">
                <div className="logo">
                    <h2><span>S</span>iya</h2><h2> <span>S</span>ort</h2>
                </div>
                <div >
                    <ul className={showMediaIcon ? " mob-menu-link" : "menu-link"}>
                        <li className="menu-item-li">
                            <NavLink to='/' activeclassname="active" className="menu-item">Home</NavLink>
                        </li>
                        <li className="menu-item-li">
                            <NavLink to='/visualiser' activeclassname="active" className="menu-item">Visualiser</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="log-reg">
                    <ul className="log-reg">
                        <li className="log-reg-li">
                            <NavLink to='/login' activeclassname="active"><Tooltip title="Login">
                                <IconButton >
                                    <Input className="log"/>
                                </IconButton>
                            </Tooltip></NavLink>
                        </li>
                        <li className="log-reg-li">
                            <NavLink to='/register' activeclassname="active"><Tooltip title="Register">
                                <IconButton >
                                    <HowToReg className="reg"/>
                                </IconButton>
                            </Tooltip></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-icon">
                        <button onClick={()=>{setShowMediaIcon(!showMediaIcon);
                        console.log(showMediaIcon);}}> 
                            <Menu className="hamburger"/>
                        </button>
                </div>
            </nav>
            <Navlink/>
        </>
        
    );
    
}
export default Navbar;