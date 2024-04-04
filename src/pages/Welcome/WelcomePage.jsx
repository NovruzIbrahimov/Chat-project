import React from "react";
import "../Welcome/welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Image1 from '../../images/headLogo.png'

function WelcomePage() {

  return (
  
    <div className="welcome-page container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center welcome-page-slice">
          <img
            src={Image1}
            alt="Chat Project Logo"
            className="logo-logo"
          />
          <h1 className="text">Welcome to Nomail Chat Platform</h1>
          <p className="text-p">Start chatting with friends and join the conversation!</p>
          <div className="buttons">

            <Link to="/login">
              <button className="btn login-button" >Login</button>
            </Link>

            <Link to="/register">
              <button className="btn register-button ">Register</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
