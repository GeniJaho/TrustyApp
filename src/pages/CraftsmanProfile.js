/* eslint-disable*/
import React, { useEffect, useState } from "react";
import tower1 from "../assets/Rectangle55.png";
import userphoto from "../assets/Rectangle15.png";
import pencil from "../assets/pencil.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schemaPatchCraftsman = yup.object().shape({
  full_name: yup.string().required('Full Name is required!'),
  username: yup.string().required('Username is required!'),
  craft: yup.string().required('Craft Name is required!'),
  price: yup.number().typeError('Price must be a number!').required('Price is required!').positive('Price must me abe greater than 0!'),
  language: yup.string().required('Language is required!'),
  address: yup.string().required('Address is required!'),
  description: yup.string()
})

const CraftsmanProfile = () => {
  // Variables
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [craft, setCraft] = useState('');
  const [price, setPrice] = useState(0);
  const [language, setLanguage] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [jwtToken, setJwtToken] = useState('');
  const [userID, setUserID] = useState(0);
  const [modalDisplay, setModalDisplay] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaPatchCraftsman)
  });
  // Fething user Data
  const fetchUserData = () => {
    let tempUser = sessionStorage.getItem('craftsman');
    tempUser = JSON.parse(tempUser);
    setJwtToken(tempUser.token);
    setUserID(tempUser.craftsman.id)
    setFullName(tempUser.craftsman.full_name);
    setUserName(tempUser.craftsman.username);
    setCraft(tempUser.craftsman.craft);
    setPrice(tempUser.craftsman.price);
    setLanguage(tempUser.craftsman.language);
    setAddress(tempUser.craftsman.address);
    setDescription(tempUser.craftsman.description);
  }


  // User Logout
  const userLogout = () => {
    sessionStorage.removeItem('craftsman')
    sessionStorage.removeItem('userType')
    history.push('/')
  }

  // Craftsman Profile Patch Function
  const craftsmenPatch = data => {
    axios.patch(`${process.env.REACT_APP_BASE_URL}/craftsmen`, {
      full_name: data.full_name,
      username: data.username,
      craft: data.craft,
      price: data.price,
      language: data.language,
      address: data.address,
      description: data.description
    }, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then( res => {
      let tempUser = sessionStorage.getItem('craftsman')
      tempUser = JSON.parse(tempUser)
      tempUser.craftsman.full_name = res.data.data.full_name
      tempUser.craftsman.username = res.data.data.username
      tempUser.craftsman.craft = res.data.data.craft
      tempUser.craftsman.price = res.data.data.price
      tempUser.craftsman.language = res.data.data.language
      tempUser.craftsman.address = res.data.data.address
      tempUser.craftsman.description = res.data.data.description
      sessionStorage.setItem('craftsman', JSON.stringify(tempUser))

    }).then(()=> fetchUserData())
    .then(()=> setModalDisplay(false))
    .catch(err => alert(err.response.data.error.description))
  }
  // Page On Load
  useEffect(() => {
    fetchUserData()
  }, [])
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
            <button className="button-one">CRAFTSMAN PROFILE</button>
            <div className="circular-icon">
              <img src={userphoto} alt="" />
            </div>
            <div className="circular-pencil">
              <img src={pencil} alt="" />
            </div>
            <p className="user-name">{fullName}</p>
          </div>
          <div className="user-detail">
            <div className="email">
              <p className="email-one">Display Name</p>
              <div className="email-part">
                <p>{fullName}</p>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Username</p>
              <div className="email-part">
                <p>{userName}</p>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Craft</p>
              <div className="email-part">
                <p>{craft}</p>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Price</p>
              <div className="email-part">
                <p>{price}$</p>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Language</p>
              <div className="email-part">
                <p>{language}</p>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Address</p>
              <div className="email-part">
                <p>{address}</p>
              </div>
            </div>
            <div className="email">
              <p className="email-one">Description</p>
              <div className="email-part">
                <p>{description}</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setModalDisplay(true)}
              >Edit Details</button>
            </div>

          </div>
          <div className="sign-out">
            <button onClick={() => userLogout()} className="signout">Abmelden</button>
          </div>
        </div>
        <div className="tower2">
          <img src={tower1} alt="" />
        </div>
      </div>
      <Modal isOpen={modalDisplay} onRequestClose={() => {fetchUserData(); setModalDisplay(false)}} >
        <h1 className='modal-h1'>Edit Your Profile</h1>
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <form onSubmit={handleSubmit(craftsmenPatch)}>
            <input defaultValue={fullName} className='patch_inputs' type="text" placeholder="Full Name" {...register('full_name')} />
            <p style={{ fontSize: '14px', color: 'red', textAlign: 'center' }}>{errors.full_name?.message}</p>

            <input defaultValue={userName} className='patch_inputs' type="text" placeholder="Username" {...register('username')} />
            <p style={{ fontSize: '14px', color: 'red', textAlign: 'center' }}>{errors.username?.message}</p>

            <input defaultValue={craft} className='patch_inputs' type="text" placeholder="Craft" {...register('craft')} />
            <p style={{ fontSize: '14px', color: 'red', textAlign: 'center' }}>{errors.craft?.message}</p>

            <input defaultValue={price} className='patch_inputs' type="text" placeholder="Price" {...register('price')} />
            <p style={{ fontSize: '14px', color: 'red', textAlign: 'center' }}>{errors.price?.message}</p>

            <input defaultValue={language} className='patch_inputs' type="text" placeholder="Language" {...register('language')} />
            <p style={{ fontSize: '14px', color: 'red', textAlign: 'center' }}>{errors.language?.message}</p>

            <input defaultValue={address} className='patch_inputs' type="text" placeholder="Address" {...register('address')} />
            <p style={{ fontSize: '14px', color: 'red', textAlign: 'center' }}>{errors.address?.message}</p>

            <textarea defaultValue={description} style={{
              width: '344px',
              borderRadius: '20px',
              marginBottom: '10px',
              border: '1px solid #000000',
              outline: 'none',
              padding: '15px',
              resize: 'vertical'
            }} rows="5" placeholder='Craft Description' {...register('description')}></textarea><br />

            <input className='patch_inputs' style={{ backgroundColor: 'skyBlue', fontSize: '18px' }} type="submit" value='Save Changes' />
          </form>
        </div>
        <button className='modal-close' onClick={() => {fetchUserData(); setModalDisplay(false)}}>Close</button>
      </Modal>

    </div>
  );
};
export default CraftsmanProfile;
