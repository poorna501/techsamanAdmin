import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import LOGO from "../../imges/logo.JPG";

const NavBar = () => {
    document.body.style.backgroundColor = "white"
    const [isOpen, setIsOpen] = useState(true);
    const handleTrigger = () => setIsOpen(!isOpen);

    return (
      <div>  
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""} shadow-lg rounded-lg`}>
          <div className="sidebar-position" onClick={handleTrigger}>
            <div className="side_br">
              <i className="fas fa-thin fa-bars fa-2x"/>
              <span>
                {/* <img src={LOGO} alt="Tech Saman Logo" style={{width: "-webkit-fill-available"}} /> */}
              </span>
            </div>
          </div>
          <div className="sidebar-position">
              <Link to="/dashboard" className="side_br rmv_under">
              <i className="fas fa-sharp fa-light fa-chart-column fa-2x"></i>
                <span>Dashboard</span>
              </Link>
              <Link to="/users" className="side_br rmv_under">
                <i className="fas fa-users fa-2x"></i>
                <span>Users</span>
              </Link>
          </div>
        </div>
      </div>
    );
};


export default NavBar;
