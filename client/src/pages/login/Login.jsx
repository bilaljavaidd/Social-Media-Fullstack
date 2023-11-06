import "./login.css"
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls.js";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material"
import { Link, redirect, useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate()
  const { isFetching, dispatch } = useContext(AuthContext)

  function handleClick(e) {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    navigate('/')
  }





  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick} >
            <input placeholder="Email" type="email" className="loginInput" required ref={email} />
            <input placeholder="Password" type="password" minLength="6" className="loginInput" required ref={password} />
            <button className="loginButton" disabled={isFetching}> {isFetching ? <CircularProgress color="inherit" size="25px" /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password ?</span>
            <Link to= "/register">
              <button style={{ marginLeft: "90px"}} className="loginRegisterButton"> Create a New Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>

  );
}
