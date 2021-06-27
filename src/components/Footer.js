import React, { useEffect, useState } from "react";
import Logo from "../assets/trustylogo.png";
import facebook from "../assets/facebookwhite.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import printest from "../assets/printest.png";
import { useLocation } from "react-router-dom";

const Footer = ({ setAuth, auth }) => {
  const location = useLocation();
  const [display, setDisplay] = useState('none');
   
  useEffect(()=>{
    if (location.pathname === '/') {
      setDisplay('none');
    }
    else if(location.pathname === '/signup'){
      setDisplay('none');
    }
    else{
      setDisplay('initial');
    }
  },[location])
  return (
    <section style={{display: `${display}`}}>
      <div className="footer">
      <img src={Logo} alt="" className="logo" />
      <p className="about">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        plant.
      </p>
      <div className="social-links">
        <img src={twitter} alt="" />
        <img src={insta} alt="" />

        <img src={facebook} alt="" />
        <img src={printest} alt="" />
      </div>
      <hr />
      <p>Copyrights @ 2021. All rights reserved</p>
      <button onClick={()=> setAuth(!auth)}>Change Auth</button>
    </div>
    </section>
  );
};

export default Footer;
