import React from "react";
import Logo from "../assets/trustylogo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
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
            <li>About</li>
          </NavLink>
          <NavLink
            to="/filter"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Filter</li>
          </NavLink>
          <NavLink
            to="/user"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>User Profile</li>
          </NavLink>
          <NavLink
            to="/work"
            activeStyle={{
              fontWeight: "bold",
              color: "#298da6",
            }}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <li>Work Profile</li>
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
