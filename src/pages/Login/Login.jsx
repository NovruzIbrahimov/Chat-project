import React from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
import Image1 from '../../images/headLogo.png'

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"><img src={Image1} className='image1'/></span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account? <Link to="/register" className="link">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
