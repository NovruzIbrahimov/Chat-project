import React from 'react'
import '../Register/register.css'
import { Link } from "react-router-dom";
import Add from '../../images/avatar.png'
import Image1 from '../../images/headLogo.png'

function Register() {
  return (
    
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"><img src={Image1} className='image1'/></span>
        <span className="title">Register</span>
        <form>
          <input  required type="text" placeholder="display name" />
          <input  required type="email" placeholder="email" />
          <input  required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img  className="img" src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          You do have an account? <Link to="/login" className='link'>Login</Link>
        </p>
      </div>
    </div>

  )
}

export default Register