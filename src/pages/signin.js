import React from "react";
import Logo from "../assets/trustylogo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

const Signin = () => {

  return (
    <div className="signin">
      <div className="top-signup">
        <img src={Logo} alt="" />
        <p className="signup-title">Sign in</p>
        <input type="text" name="" id="" placeholder="Username" />
        <input type="password" name="" id="" placeholder="Password" />
      </div>

      <div className="bottom-signup">
        <p>----- or -----</p>
        <div className="social-login">
          <img src={google} alt="" />
          <img src={facebook} alt="" />
        </div>
        <Link to="/home">
          <button>LOGIN</button>
        </Link>
        <p className="sigin-route">
          Don't have an account ?{" "}
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <span>Signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
