import React from "react";
import Logo from "../assets/trustylogo.png";
// import google from "../assets/google.png";
// import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedOption, setSelectedOption] = React.useState("customer")
  const [fullname, setFullname] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [conf_password, setConf_Password] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [craft, setCraft] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [language, setLanguage] = React.useState("")
  const [description, setDescription] = React.useState("")

  const [errorFullname, setErrorFullname] = React.useState(false)
  const [errorUsername, setErrorUsername] = React.useState(false)
  const [errorPassword, setErrorPassword] = React.useState(false)
  const [errorConfPassword, setErrorConfPassword] = React.useState(false)
  const [errorAddress, setErrorAddress] = React.useState(false)
  const [errorCraft, setErrorCraft] = React.useState(false)
  const [errorPrice, setErrorPrice] = React.useState(false)
  const [errorLanguage, setErrorLanguage] = React.useState(false)

  const handleFieldChange = changeEvent => {
    if (changeEvent.target.type === "radio") {
      setSelectedOption(changeEvent.target.value)
    } else if (changeEvent.target.id === "fullname") {
      if (changeEvent.target.value === "") {
        setErrorFullname(true)
      } else {
        setErrorFullname(false)
      }
      setFullname(changeEvent.target.value)
    } else if (changeEvent.target.id === "username") {
      if (changeEvent.target.value === "") {
        setErrorUsername(true)
      } else {
        setErrorUsername(false)
      }
      setUsername(changeEvent.target.value)
    } else if (changeEvent.target.id === "password") {
      if (changeEvent.target.value === "") {
        setErrorPassword(true)
      } else {
        setErrorPassword(false)
      }
      setPassword(changeEvent.target.value)
    } else if (changeEvent.target.id === "conf_password") {
      if ((changeEvent.target.value === "") || (changeEvent.target.value !== password)) {
        setErrorConfPassword(true)
      } else {
        setErrorConfPassword(false)
      }
      setConf_Password(changeEvent.target.value)
    } else if (changeEvent.target.id === "address") {
      if (changeEvent.target.value === "") {
        setErrorAddress(true)
      } else {
        setErrorAddress(false)
      }
      setAddress(changeEvent.target.value)
    } else if (changeEvent.target.id === "craft") {
      if (changeEvent.target.value === "") {
        setErrorCraft(true)
      } else {
        setErrorCraft(false)
      }
      setCraft(changeEvent.target.value)
    } else if (changeEvent.target.id === "price") {
      if (changeEvent.target.value === "") {
        setErrorPrice(true)
      } else {
        setErrorPrice(false)
      }
      setPrice(changeEvent.target.value)
    } else if (changeEvent.target.id === "language") {
      if (changeEvent.target.value === "") {
        setErrorLanguage(true)
      } else {
        setErrorLanguage(false)
      }
      setLanguage(changeEvent.target.value)
    } else if (changeEvent.target.id === "description") {
      setDescription(changeEvent.target.value)
    }
  }

  const createPayload = () => {
    const user = {
      fullname: fullname,
      username: username,
      password: password
    }
    return user
  }

  const signupFunc = () => {
    let payload = createPayload()
  }

  return (
    <div className="signin">
      <div className="inner-div">
        <div className="top-signup">
          <img src={Logo} alt="" />
          <p className="signup-title">Sign up</p>
          <input className="fullname" type="text" name="" id="fullname" placeholder="Full Name *" value={fullname} onChange={handleFieldChange} />
          {
            (errorFullname) && (
              <div style={{width: '100%'}}>
                <p className="error-msg">Enter valid name</p>
              </div>
            )
          }
          <input className="username" type="text" name="" id="username" placeholder="Username *" value={username} onChange={handleFieldChange} />
          {
            (errorUsername) && (
              <div style={{width: '100%'}}>
                <p className="error-msg">Enter valid username</p>
              </div>
            )
          }
          <input className="password" type="password" name="" id="password" placeholder="Password *" value={password} onChange={handleFieldChange} />
          {
            (errorPassword) && (
              <div style={{width: '100%'}}>
                <p className="error-msg">Enter valid password</p>
              </div>
            )
          }
          <input className="password" type="password" name="" id="conf_password" placeholder="Confirm Password *" value={conf_password} onChange={handleFieldChange} />
          {
            (errorConfPassword) && (
              <div style={{width: '100%'}}>
                <p className="error-msg">Password doesnot match</p>
              </div>
            )
          }
          {
            (selectedOption === "craftsmen") && (
              <>
                <input className="address" type="text" name="" id="address" placeholder="Address *" value={address} onChange={handleFieldChange} />
                {
                  (errorAddress) && (
                    <div style={{width: '100%'}}>
                      <p className="error-msg">Enter valid address</p>
                    </div>
                  )
                }
                <input className="craft" type="text" name="" id="craft" placeholder="Craft *" value={craft} onChange={handleFieldChange} />
                {
                  (errorCraft) && (
                    <div style={{width: '100%'}}>
                      <p className="error-msg">Enter valid craft</p>
                    </div>
                  )
                }
                <input className="price" type="number" name="" id="price" placeholder="Price *" min="0" value={price} onChange={handleFieldChange}/>
                {
                  (errorPrice) && (
                    <div style={{width: '100%'}}>
                      <p className="error-msg">Enter valid price</p>
                    </div>
                  )
                }
                <input className="language" type="text" name="" id="language" placeholder="Language *" value={language} onChange={handleFieldChange} />
                {
                  (errorLanguage) && (
                    <div style={{width: '100%'}}>
                      <p className="error-msg">Enter valid language</p>
                    </div>
                  )
                }
                <textarea className="description" type="text" name="" id="description" rows='5' placeholder="Description" value={description} onChange={handleFieldChange} />
              </>
            )
          }
          <div className="radio-group">
            <div className="radio-button">
              <label className={selectedOption === "customer" ? "radio-button-label_selected" : "radio-button-label"}>
                <input
                  type="radio"
                  name="react-tips"
                  value="customer"
                  checked={(selectedOption === "customer") ? true : false}
                  onChange={handleFieldChange}
                  className="form-radio-input"
                />
                Customer
              </label>
            </div>
            <div className="radio-button">
              <label className={selectedOption === "craftsmen" ? "radio-button-label_selected" : "radio-button-label"}>
                <input
                  type="radio"
                  name="react-tips"
                  value="craftsmen"
                  checked={(selectedOption === "craftsmen") ? true : false}
                  onChange={handleFieldChange}
                  className="form-radio-input"
                />
                Craftsmen
              </label>
            </div>
          </div>
        </div>

        <div className="bottom-signup">
          {/* <p>----- or -----</p>
          <div className="social-login">
            <img src={google} alt="" />
            <img src={facebook} alt="" />
          </div> */}
          <Link to="/home">
            <button onClick={signupFunc}>Register</button>
          </Link>
          <p className="sigin-route">
            Already have an account ?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
