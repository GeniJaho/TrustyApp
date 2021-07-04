/* eslint-disable*/
import React, { useEffect, useState } from "react";
import tower1 from "../assets/Rectangle55.png";
import userphoto from "../assets/Rectangle15.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  // Variables
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [jwtToken, setJwtToken] = useState('');
  const [userID, setUserID] = useState(0);
  const [modalDisplayName, setModalDisplayName] = useState(false);
  const [modalUsername, setModalUsername] = useState(false);
  const history = useHistory();
  const [patchInputValue, setPatchInputValue] = useState('');
  
  // Fething user Data
  const fetchUserData = () => {
    let tempUser = sessionStorage.getItem('user');
    tempUser = JSON.parse(tempUser);
    setJwtToken(tempUser.token);
    setUserID(tempUser.user.id)
    setFullName(tempUser.user.full_name);
    setUserName(tempUser.user.username);
  }

  // User Logout 
  const userLogout = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('userType')
    history.push('/')
  } 

  // User Display Name Patch Function
  const patchDisplayName = () => {
    if (patchInputValue) {
      axios.patch(`${process.env.REACT_APP_BASE_URL}/users`,{
        full_name: patchInputValue
      },{
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }).then(res=>{
        let tempUser = sessionStorage.getItem('user');
        tempUser = JSON.parse(tempUser);
        tempUser.user.full_name = res.data.data.full_name
        setFullName(tempUser.user.full_name)
        sessionStorage.setItem('user', JSON.stringify(tempUser))
        setModalDisplayName(false)
        setPatchInputValue('')
      })
      .catch(err=> alert(err.response.data.error.description))
      return
    }
    alert('Name kann nicht leer sein!')
  } 

  // User Username Patch Function
  const patchUsername = () => {
    if (patchInputValue) {
      axios.patch(`${process.env.REACT_APP_BASE_URL}/users`,{
        username: patchInputValue
      },{
        headers: {
          Authorization: `Bearer ${jwtToken}`
          
        }
      }).then(res=>{
        let tempUser = sessionStorage.getItem('user');
        tempUser = JSON.parse(tempUser);
        tempUser.user.username = res.data.data.username
        setUserName(tempUser.user.username)
        sessionStorage.setItem('user', JSON.stringify(tempUser))
        setModalUsername(false)
        setPatchInputValue('')
      })
      .catch(err=> alert(err.response.data.error.description))
      return
    }
    alert('Benutzername kann nicht leer sein!')
  }

  useEffect(()=>{
    fetchUserData()
  },[])
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
            <p className="user-name">{fullName}</p>     
          </div>
          <div className="user-detail">
            <div className="email">
              <p className="email-one">Display name</p>
              <div className="email-part">
                <p>{fullName}</p>
                <button onClick={()=> setModalDisplayName(true)}>Edit</button>
              </div>
            </div>
            <div className="email">
              <p className="email-one">User Name</p>
              <div className="email-part">
                <p>{userName}</p>
                <button onClick={()=> setModalUsername(true)}>Edit</button>
              </div>
            </div>
          </div>
          <div className="sign-out">
            <button onClick={()=> userLogout()} className="signout">Abmelden</button>
          </div>
        </div>
        <div className="tower2">
          <img src={tower1} alt="" />
        </div>
      </div>
      <Modal isOpen={modalDisplayName} onRequestClose={()=> setModalDisplayName(false)} >
        <h1 className='modal-h1'>Edit Display Name</h1>
        <input value={patchInputValue} onChange={e => setPatchInputValue(e.target.value)} placeholder='Your New Display Name' className='modal-input' type="text" /><br />
        <button className='modal-close' onClick={()=> setModalDisplayName(false)}>Close</button>
        <button className='modal-save' onClick={()=> patchDisplayName()}>Save Changes</button>
      </Modal>

      <Modal isOpen={modalUsername} onRequestClose={()=> setModalUsername(false)} >
        <h1 className='modal-h1'>Edit Username</h1>
        <input value={patchInputValue} onChange={e => setPatchInputValue(e.target.value)} placeholder='Your New Username' className='modal-input' type="text" /><br />
        <button className='modal-close' onClick={()=> setModalUsername(false)}>Close</button>
        <button className='modal-save' onClick={()=> patchUsername()}>Save Changes</button>
      </Modal>

    </div>
  );
};
export default UserProfile;
