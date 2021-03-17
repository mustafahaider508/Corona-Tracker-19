import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {NavLink, Typography} from "@material-ui/core";
import { SidebarData } from './SidebarData';
import "./Sidebar.css";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";


function Sidebar() {
    const[sidebar,Setsidebar] = useState(false);

    const Showsidebar = () => Setsidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="sidebar">
        
         <Link to="#" className="menu-bars">
         <FaIcons.FaBars onClick={Showsidebar} /> 
         </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
         <ul className="nav-menu-items" onClick={Showsidebar}>
             <li className="navbar-toggle">
             <Typography className="sidebar_heading" variant="h4">CovidJS</Typography>
                 <Link to="#" className="menu_bar">
                 <AiIcons.AiOutlineClose   />

                 </Link>
             </li>
             
             {SidebarData.map((item,index) => {
                 return(
                    
                     <li key={index} className={item.cName}>
                     
                     <Link to={item.path}>
                             {item.Icon}
                             <span>{item.title}</span>
                             </Link>
                         
                     </li>
                 )

             })}
         </ul>

        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
