/* eslint-disable */
import Logo from "../assets/trustylogo.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";

const schemaCraftsman = yup.object().shape({
  full_name: yup.string().required('vollständiger Name ist erforderlich!'),
  username: yup.string().required('Username ist erforderlich!'),
  password: yup.string().min(8, 'Passwort muss mindestens 8 Zeichen lang sein!').max(20, 'Passwort darf maximal 20 Zeichen lang sein!').required('Passwort ist erforderlich!'),
  // ?? 
  conf_password: yup.string().oneOf([yup.ref('password'), null]),
  craft: yup.string().required('Tätigkeitsbereich ist erforderlich'),
  price: yup.number().typeError('Preis muss ein Zahl sein!').required('Preis ist erforderlich!').positive('Preis muss größer als 0 sein!'),
  language: yup.string().required('Sprache ist erforderlich!'),
  address: yup.string().required('Adresse ist erforderlich!'),
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
    axios.post(`${process.env.REACT_APP_BASE_URL}/craftsmen/register`,{
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
      sessionStorage.setItem('craftsman', JSON.stringify(res.data.data))
      sessionStorage.setItem('userType', 'craftsman')
    })
    .then(()=> history.push('/home'))
    .catch(err=> alert(err.response.data.error.description))
  }
  const craftsmenSignup = () => {
    return(
      <div className="top-signup">
      <img src={Logo} alt="" />
      <p className="signup-title">Handwerker Registrierung</p>
      <form onSubmit={handleSubmit(craftsmenRegister)}>
        <input type="text"  placeholder="vollständiger Name" {...register('full_name')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.full_name?.message}</p>

        <input type="text"  placeholder="Username" {...register('username')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.username?.message}</p>

        <input type="text"  placeholder="Tätigkeitsbereich" {...register('craft')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.craft?.message}</p>

        <input type="text"  placeholder="Preis" {...register('price')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.price?.message}</p>

        <input type="text"  placeholder="Sprachen" {...register('language')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.language?.message}</p>

        <input type="text"   placeholder="Adresse" {...register('address')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.address?.message}</p>

        <input type="password"  placeholder="Passwort" {...register('password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.password?.message}</p>

        <input type="password"  placeholder="Passwort bestätigen" {...register('conf_password')}/>
        <p style={{fontSize: '14px', color: 'red', textAlign: 'center'}}>{errors.conf_password && "Passwort stimmt nicht überein!"}</p>

        <textarea style={{width: '344px',
         borderRadius: '20px',
         marginBottom: '10px',
         border: '1px solid #000000',
         outline: 'none',
         padding: '15px',
         resize: 'vertical'}} placeholder='Beschreibung. Bitte Handy Nummer oder Email eingeben.' {...register('description')}></textarea><br />

        <input  style={{backgroundColor: 'skyBlue', fontSize: '18px'}} type="submit" value='Registrieren' />
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
          Sie haben bereits ein Konto?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
            <span>Login</span>
          </Link>
        </p>
        <button onClick={()=> history.push('/signup')}>Kunden Registrierung</button>
      </div>
    </div>
  );
};

export default CraftsmanSignup;
