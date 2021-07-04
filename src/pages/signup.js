/* eslint-disable */
import React, { useEffect } from "react";
import Logo from "../assets/trustylogo.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schemaUser = yup.object().shape({
  full_name: yup.string().required('vollständiger Name ist erforderlich!'),
  username: yup.string().required('Username ist erforderlich!'),
  password: yup.string().min(8, 'Passwort muss mindestens 8 Zeichen lang sein!').max(20, 'Passwort darf maximal 20 Zeichen lang sein!').required('Passwort ist erforderlich!'),
  conf_password: yup.string().oneOf([yup.ref('password'), null])
})

const Signup = () => {
  // Variables
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schemaUser)
  });
  const history = useHistory();
  // User Register
  const onSubmit = data => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,{
      full_name: data.full_name,
      username: data.username,
      password: data.password,
      conf_password: data.conf_password
    }).then(res=> {
      sessionStorage.setItem('user', JSON.stringify(res.data.data))
      sessionStorage.setItem('userType', 'customer');
    })
    .then(()=> history.push('/home'))
    .catch(err=> alert(err.response.data.error.description))
  }

  const userSignup = () => {
    return(
    <div className="top-signup">
      <img src={Logo} alt="" />
      <p className="signup-title">Kunden Registrierung</p>
      <form onSubmit={handleSubmit(onSubmit) }>
        <input type="text" placeholder="Name" {...register('full_name')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.full_name?.message}</p>
        <input type="text" placeholder="Username" {...register('username')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.username?.message}</p>
        <input type="password" placeholder="Passwort" {...register('password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.password?.message}</p>
        <input type="password" placeholder="Passwort bestätigen" {...register('conf_password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.conf_password && "Passwort stimmt nicht überein!"}</p>
        <input style={{backgroundColor: 'skyBlue', fontSize: '18px'}} type="submit" value='Registrieren' />
      </form>
    </div>
    )
  }

  // Page On Load Function
  useEffect(()=>{
    const tempUser = sessionStorage.getItem('userType');
    if (tempUser) {
      history.push('/home')
    }
  },[])

  return (
    <div className="signin">
      {userSignup()}
      <div className="bottom-signup">

        <p className="sigin-route">
          Sie haben bereits ein Konto?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
            <span>Login</span>
          </Link>
        </p>
        <button onClick={()=> history.push('/craftsman/signup')}>Handwerker Registrierung</button>
      </div>
    </div>
  );
};

export default Signup;
