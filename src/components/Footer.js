import React, { useEffect, useState } from "react";
import Logo from "../assets/trustylogo.png";
import facebook from "../assets/facebookwhite.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import printest from "../assets/printest.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [display, setDisplay] = useState('none');

  useEffect(()=>{
    if (location.pathname === '/') {
      setDisplay('none');
    }
    else if(location.pathname === '/signup'){
      setDisplay('none');
    }
    else if(location.pathname === '/craftsman/signup'){
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
        Trusty ist ein Handwerker online Plattform, das von DIGIPEDIA SOLUTIONS entwickelt wurde. <br/>
        Sie können uns auf folgenden Plattformen folgen.
      </p>
      <div className="social-links flex flex-row">
        <img src={twitter} alt="" />
        <img src={insta} alt="" />
        <img src={facebook} alt="" />
        <img src={printest} alt="" />
      </div>
      <hr />
      <p>Copyrights @ 2021. All rights reserved for DIGIPEDIA SOLUTIONS</p>
    </div>
    </section>
  );
};

export default Footer;
