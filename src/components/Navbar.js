import React from "react";
import Logo from "../assets/trustylogo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <a href="home"><img src={Logo} alt="" /></a>
        </div>
        
        <ul>

          <NavLink
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Über uns</li>
          </NavLink>

          <NavLink
            to="/filter"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Suchen</li>
          </NavLink>

          <NavLink
            to="/user"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Kunden Profil</li>
          </NavLink>

          <NavLink
            to="/work"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Handwerker Profil</li>
          </NavLink>

        </ul>

        <div className="nav-button">
          <Link to="/signup">
            <button>Registrieren</button>
          </Link>
          <Link to="/">
            <button>Anmelden</button>
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
