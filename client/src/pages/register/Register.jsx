import axios from "axios";
import "./register.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { Margin } from "@mui/icons-material";



export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate()


  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("password don't match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        const res = await axios.post('/auth/register', user)
        console.log(res);
        navigate("/login")



      } catch (error) {
        console.log(error)
      }
    }
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
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" type="password" required ref={password} className="loginInput" />
            <input placeholder="PasswordAgain" type="password" required ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type="submit" >Sign Up</button>
           <Link  to="/login">
              <button style={{ marginLeft: "90px"}}  className="loginRegisterButton">Log in to your account</button>
           </Link>
          </form>
        </div>
      </div>
    </div>

  );
}
