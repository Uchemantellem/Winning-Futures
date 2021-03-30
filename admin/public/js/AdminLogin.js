import React, { useState }  from "react";
import Firebase from "firebase";
import config from "./config";

// Firebase.initializeApp(config.firebase);
if (!Firebase.apps.length) {
    Firebase.initializeApp(config);
    }else {
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
        .then(user => {})
        .catch(error => {
            console.log(error);
            alert("INVALID Passwords");
        });
    }

    function Register(event) {
        event.preventDefault();
        // log user
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {})
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleEmailChange} type="email" name="email" className="form-control" placeholder="Email Address"/>
                    <input onChange={handlePasswordChange} type="password" name="password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">SignIn</button>
                <button onClick={Register} type="button" className="btn btn-danger">SignUp</button>
            </form>
        </div>
    )
}


export default AdminLogin;