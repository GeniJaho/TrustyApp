import React from "react";
import Logo from "../assets/trustylogo.png";
// import google from "../assets/google.png";
// import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

const Signin = () => {
  const [selectedOption, setSelectedOption] = React.useState("customer")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errorUsername, setErrorUsername] = React.useState(false)
  const [errorPassword, setErrorPassword] = React.useState(false)

  const handleFieldChange = changeEvent => {
    if (changeEvent.target.type === "radio") {
      setSelectedOption(changeEvent.target.value)
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
    }
  }

  const createPayload = () => {
    const user = {
      username: username,
      password: password
    }
    return user
  }

  const signinFunc = () => {
    let payload = createPayload()
  }

  return (
    <div className="signin">
      <div className="inner-div">
        <div className="top-signup">
          <img src={Logo} alt="" />
          <p className="signup-title">Sign in</p>
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
            <button onClick={signinFunc}>LOGIN</button>
          </Link>
          <p className="sigin-route">
            Don't have an account ?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <span>Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;