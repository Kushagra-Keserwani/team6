import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { SidebarData } from './sidebarData.js';
import { IconContext } from 'react-icons';
import './sidebar.css';


function dumpToken(props) {

    console.log("Logoooooooout");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
}



function SideMenuBar(props) {

    return (
        <>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={props.showSidebar} />
                </Link>
                {/* <div className='heading'><Link to='/home'>ATM Banking App</Link></div> */}

                <div className="user-icon">
                    <div className="dropdown">
                        <button className="dropbtn"><BiIcons.BiUserCircle style={{fontSize:'30px'}}></BiIcons.BiUserCircle></button>
                        <div className="dropdown-content">
                           <Link to='/home'><div>Home</div></Link>
                            <Link to='/logout'><div>Logout</div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={props.showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {localStorage['role'] == "Admin" &&
                        <li className='nav-text'>
                            <Link to='/addCustomer'><AiIcons.AiOutlineUserAdd></AiIcons.AiOutlineUserAdd><span>Add Customer</span></Link></li>}
                    {localStorage['role'] == "Admin" &&
                        <li className='nav-text'>
                            <Link to='/viewStatus'><AiIcons.AiFillAccountBook></AiIcons.AiFillAccountBook><span>User Activity</span></Link></li>}
                    {localStorage['role'] == "Admin" &&
                        <li className='nav-text'>
                            <Link to='/cheque'><AiIcons.AiFillCheckCircle></AiIcons.AiFillCheckCircle><span>Cheques</span></Link></li>}
                    {SidebarData.map((item, index) => {
                        {
                            if (item.title == "Logout") {
                                return (
                                    <li key={index} className={item.cName} onClick={() => dumpToken(item.path)}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            } else {

                                return (<li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>);
                            }
                        }
                    })}
                </ul>
            </nav>
            {/* </IconContext.Provider > */}
        </>
    );
}

export default SideMenuBar;