import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData.js';
import { IconContext } from 'react-icons';
import './sidebar.css';


function dumpToken(props){
    
    console.log("Logoooooooout");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
}



function SideMenuBar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {/* <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li> */}
                    {SidebarData.map((item, index) => {
                        {if(item.title=="Logout"){
                        return (
                            <li key={index} className={item.cName} onClick={() =>dumpToken(item.path)}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );}else{
                            return(<li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>);
                        }}
                    })}
                </ul>
            </nav>
            {/* </IconContext.Provider > */}
        </>
    );
}

export default SideMenuBar;