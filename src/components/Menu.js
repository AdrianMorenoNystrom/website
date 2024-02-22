import React from "react";
import {NavLink } from "react-router-dom";
import "./Menu.css"





const Menu=()=>{
    return(
        <div className='navbar'>
            <div className='menu-container'>
                <ul className='nav-links'>
                    <li>
                    <NavLink to='/' className={({isActive})=>isActive ? "active" :""}>
                        Hem
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/About' className={({isActive})=>isActive ? "active" :""}>
                        Om mig
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/Portfolio' className={({isActive})=>isActive ? "active" :""}>
                        Portfolio
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/Cv' className={({isActive})=>isActive ? "active" :""}>
                        CV
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/Contact' className={({isActive})=>isActive ? "active" :""}>
                        Kontakt
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;