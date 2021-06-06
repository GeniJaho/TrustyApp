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
{/*             <button className="tier">Free</button>*/}     
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
          {/* <div className="user-plan">
            <p>Subscriptions</p>
            <div className="plan-switch">
              <button>Take Free</button>
              <button>Upgrade to pro</button>
            </div>
            <button className="upgrade">See the Pro Benefits {`->`}</button>
          </div> */}
          <div className="sign-out">
            <button className="signout">Sign Out</button>
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
