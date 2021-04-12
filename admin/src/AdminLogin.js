import React, { useState } from "react";
import Firebase from "firebase";
import config from "./config";
import "./style/login.css"
import { Carousel } from 'antd';
import Right from './img/right.png'
import Banner1 from './img/banner1.jpg'
import Banner2 from './img/banner2.jpg'
import Banner3 from './img/banner3.jpg'

// Firebase.initializeApp(config.firebase);
if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
} else {
  Firebase.app(); // if already initialized, use that one
}

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // log user
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => { })
      .catch(error => {
        console.log(error);
        alert("INVALID Passwords");
      });
  }

  function Register(event) {
    event.preventDefault();
    // log user
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => { })
      .catch(error => {
        console.log(error);
      });
  }


  return (
    <div className="container login-container">
      <div className="from-warp flex-center">
        <img className="logo" src={require("./img/logo.jpg").default} alt="" />
        <p>Sign in</p>
        <form onSubmit={handleSubmit} className="flex-center">
          <div className="form-group input-group-lg">
            <input onChange={handleEmailChange} type="email" name="email" className="form-control" placeholder="Email Address" />
            <input onChange={handlePasswordChange} type="password" name="password" className="form-control" placeholder="Password" />
          </div>
          <div className='login-btn' onClick={handleSubmit}>
            <img src={Right} alt="" />
          </div>
          {/* <button type="submit" className="btn btn-primary">SignIn</button> */}
          {/* <button onClick={Register} type="button" className="btn btn-danger">SignUp</button> */}

          <div onClick={Register} style={{color: "#667BD1",marginTop: "40px",fontSize: "16px",cursor: "pointer"}}>SignUp</div>
        </form>
      </div>
      <div className="img-warp">
        <Carousel autoplay>
          <div>
            <img src={Banner1} alt=""/>
          </div>
          <div>
            <img src={Banner2} alt=""/>
          </div>
          <div>
            <img src={Banner3} alt=""/>
          </div>
        </Carousel>

      </div>
    </div>
  )
}


export default AdminLogin;