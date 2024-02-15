import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"





const Menu=()=>{
    return(
        <div className='navbar'>
            <div className='menu-container'>
                <ul className='nav-links'>
                    <li>
                        {/* navlink kan användas också * https://www.linkedin.com/pulse/what-difference-between-link-navlink-react-router-avner-mushnik */}
                        <Link to='/' className="nav-link">
                            Hem
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className="nav-link">
                            Om mig
                        </Link>
                    </li>
                    <li>
                        <Link to='/Portfolio' className="nav-link">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to='/Cv' className="nav-link">
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link to='/Contact' className="nav-link">
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;