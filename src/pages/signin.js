/* eslint-disable*/
import React, { useEffect, useState } from "react";
import Logo from "../assets/trustylogo.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  username: yup.string().required('Username is required!'),
  password: yup.string().min(8).max(20).required('Password is required!')
})

const Signin = () => {
  // Variables
  const [toggleLogin, setToggleLogin] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const history = useHistory();
  // User Login
  const userLogin = data => {
    axios.post('http://trusty.local/users/login',{
      username: data.username,
      password: data.password
    }).then(res=> {
      sessionStorage.setItem('user', JSON.stringify(res.data.data))
      sessionStorage.setItem('userType', 'customer');
    })
    .then(()=> history.push('/home'))
    .catch(err=> alert(err.response.data.error.description))
  }
    // Craftsmen Login
    const craftsmenLogin = data => {
      axios.post('http://trusty.local/craftsmen/login',{
        username: data.username,
        password: data.password
      }).then(res=> {
        sessionStorage.setItem('craftsmen', JSON.stringify(res.data.data))
        sessionStorage.setItem('userType', 'craftsmen')
      })
      .then(()=> history.push('/home'))
      .catch(err=> alert(err.response.data.error.description))
    }
  // User Signin
  const userSignin = () => {
    return(
        <div className="top-signup">
          <img src={Logo} alt="" />
          <p className="signup-title">Customer Sign in</p>
          <form onSubmit={handleSubmit(userLogin)}>
            <input className="username" type="text" placeholder="Username *" {...register('username')}/><br />
            <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.username?.message}</p>
            <input className="password" type="password" placeholder="Password *" {...register('password')}/><br />
            <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.password?.message}</p>
            <input style={{backgroundColor: 'skyBlue', fontSize: '18px'}} type="submit" value='Login' />
          </form>
        </div>
    )
  }
  // Craftsmen Signin
  const craftsmenSignin = () => {
    return(
        <div className="top-signup">
          <img src={Logo} alt="" />
          <p className="signup-title">Craftsmen Sign in</p>
          <form onSubmit={handleSubmit(craftsmenLogin)}>
            <input className="username" type="text" placeholder="Username *" {...register('username')}/><br />
            <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.username?.message}</p>
            <input className="password" type="password" placeholder="Password *" {...register('password')}/><br />
            <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.password?.message}</p>
            <input style={{backgroundColor: 'skyBlue', fontSize: '18px'}} type="submit" value='Login' />
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
      <div className="inner-div">
        
      {toggleLogin ? craftsmenSignin() : userSignin()}
        <div className="bottom-signup">
          <p className="sigin-route">
            Don't have an account ?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <span>Signup</span>
            </Link>
          </p>
          {toggleLogin ? <button onClick={()=> setToggleLogin(!toggleLogin)}>Login as a Customer</button> : <button onClick={()=> setToggleLogin(!toggleLogin)}>Login as a Craftsman</button>}
        </div>
      </div>
    </div>
  );
};

export default Signin;