import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars,  FaWindowClose } from "react-icons/fa";
import "./Navigation.css";
import { MenuData } from "../data/MenuData";
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => setShowMenu(!showMenu);
  return (
    <aside>
      <div className="navbar" >
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggle}/>
          </Link>
        </div>
        <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-item"  onClick={toggle}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bar">
                <FaWindowClose />
              </Link>
            </li>
            {MenuData.map((menu,index)=>{
                return(
                    <li className="menu-text" key={index}>
                        <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                    </li>
                )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
