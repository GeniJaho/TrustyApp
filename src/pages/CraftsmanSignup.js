import Logo from "../assets/trustylogo.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";

const schemaCraftsman = yup.object().shape({
  full_name: yup.string().required('Full Name is required!'),
  username: yup.string().required('Username is required!'),
  password: yup.string().min(8, 'Password must be at least 8 characters!').max(20, 'Password must be at most 20 characters!').required('Password is required!'),
  conf_password: yup.string().oneOf([yup.ref('password'), null]),
  craft: yup.string().required('Craft Name is required!'),
  price: yup.number().typeError('Price must be a number!').required('Price is required!').positive('Price must me abe greater than 0!'),
  language: yup.string().required('Language is required!'),
  address: yup.string().required('Address is required!'),
  description: yup.string()
})

const CraftsmanSignup = () => {
  // Variables
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schemaCraftsman)
  });
  const history = useHistory();
  // Craftsmen Register
  const craftsmenRegister = data => {
    axios.post('http://trusty.local/craftsmen/register',{
      full_name: data.full_name,
      username: data.username,
      password: data.password,
      conf_password: data.conf_password,
      craft: data.craft,
      price: data.price,
      language: data.language,
      address: data.address,
      description: data.description
    }).then(res=> {
      sessionStorage.setItem('craftsmen', JSON.stringify(res.data.data))
      sessionStorage.setItem('userType', 'craftsmen')
    })
    .then(()=> history.push('/home'))
    .catch(err=> alert(err.response.data.error.description))
  }
  const craftsmenSignup = () => {
    return(
      <div className="top-signup">
      <img src={Logo} alt="" />
      <p className="signup-title">Craftsmen Sign up</p>
      <form onSubmit={handleSubmit(craftsmenRegister)}>
        <input type="text"  placeholder="Full Name" {...register('full_name')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.full_name?.message}</p>

        <input type="text"  placeholder="Username" {...register('username')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.username?.message}</p>

        <input type="text"  placeholder="Craft" {...register('craft')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.craft?.message}</p>

        <input type="text"  placeholder="Price" {...register('price')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.price?.message}</p>

        <input type="text"  placeholder="Language" {...register('language')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.language?.message}</p>

        <input type="text"   placeholder="Address" {...register('address')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.address?.message}</p>

        <input type="password"  placeholder="Password" {...register('password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.password?.message}</p>

        <input type="password"  placeholder="Confirm Password" {...register('conf_password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.conf_password && "Password not matching!"}</p>

        <textarea style={{width: '344px',
         borderRadius: '20px',
         marginBottom: '10px',
         border: '1px solid #000000',
         outline: 'none',
         padding: '15px',
         resize: 'vertical'}} placeholder='Craft Description' {...register('description')}></textarea><br />

        <input  style={{backgroundColor: 'skyBlue', fontSize: '18px'}} type="submit" value='Register' />
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
      {craftsmenSignup()}
      <div className="bottom-signup">
        <p className="sigin-route">
          Already have an account ?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
            <span>Login</span>
          </Link>
        </p>
        <button onClick={()=> history.push('/signup')}>Sign Up as a Customer</button>
      </div>
    </div>
  );
};

export default CraftsmanSignup;
