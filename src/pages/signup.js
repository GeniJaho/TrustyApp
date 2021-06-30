import React  from "react";
import Logo from "../assets/trustylogo.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  full_name: yup.string().required('Full Name is required!'),
  username: yup.string().required('Username is required!'),
  password: yup.string().min(8, 'Password must be at least 8 characters!').max(20, 'Password must be at most 20 characters!').required('Password is required!'),
  conf_password: yup.string().oneOf([yup.ref('password'), null])
})

const Signup = () => {
  // Variables
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const history = useHistory();
  // User Register
  const onSubmit = data => {
    axios.post('http://trusty.local/users/register',{
      full_name: data.full_name,
      username: data.username,
      password: data.password,
      conf_password: data.conf_password
    }).then(res=> {
      sessionStorage.setItem('user', JSON.stringify(res.data.data))
      sessionStorage.setItem('userType', 'customer');
    })
    .then(()=> history.push('/home'))
    .catch(err=> alert(err.message))
  }

  const userSignup = () => {
    return(
    <div className="top-signup">
      <img src={Logo} alt="" />
      <p className="signup-title">Customer Sign up</p>
      <form onSubmit={handleSubmit(onSubmit) }>
        <input type="text" placeholder="Full Name" {...register('full_name')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.full_name?.message}</p>
        <input type="text" placeholder="Username" {...register('username')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.username?.message}</p>
        <input type="password" placeholder="Password" {...register('password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.password?.message}</p>
        <input type="password" placeholder="Confirm Password" {...register('conf_password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.conf_password && "Password not matching!"}</p>
        <input style={{backgroundColor: 'skyBlue', fontSize: '18px'}} type="submit" value='Register' />
      </form>
    </div>
    )
  }

  return (
    <div className="signin">
      {userSignup()}
      <div className="bottom-signup">
        <p className="sigin-route">
          Already have an account ?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
            <span>Login</span>
          </Link>
        </p>
        <button onClick={()=> history.push('/craftsman/signup')}>Sign Up as a Craftsman</button>
      </div>
    </div>
  );
};

export default Signup;
