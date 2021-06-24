import React from "react";
import tower1 from "../assets/Rectangle55.png";
import userphoto from "../assets/Rectangle15.png";
import pencil from "../assets/pencil.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserProfile = () => {
  return (
    <div className="user">
      <Navbar></Navbar>
      <div className="user-tile">
        <div className="user-section">
          <ul>
            <li>T</li>
            <li>R</li>
            <li>U</li>
            <li>S</li>
            <li>T</li>
            <li>Y</li>
          </ul>

          <img src={tower1} alt="" />
        </div>
        <div className="user-details">
          <div className="user-title">
            <button className="button-one">USER PROFILE</button>
            <div className="circular-icon">
              <img src={userphoto} alt="" />
            </div>
            <div className="circular-pencil">
              <img src={pencil} alt="" />
            </div>
            <p className="user-name">Elizabeth 25</p>     
          </div>
          <div className="user-detail">
            <div className="email">
              <p className="email-one">Display name</p>
              <div className="email-part">
                <p>Eli_Zabeth</p>
                <button>Edit</button>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Email</p>
              <div className="email-part">
                <p>icaniwilldk@gmail.com</p>
                <button>Edit</button>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Password</p>
              <div className="email-part">
                <p>. . . . . .</p>
                <button>Edit</button>
              </div>
            </div>
          </div>
          <div className="sign-out">
            <button className="signout">Abmelden</button>
          </div>
        </div>
        <div className="tower2">
          <img src={tower1} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default UserProfile;
