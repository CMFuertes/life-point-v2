import React, { useContext, useRef } from 'react';
import UserContext from "../UserContext";
import API from "../utils/API";
import { useHistory, Link } from "react-router-dom";
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInDown: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}


function SignUp(props) {
    const { email, setEmail, loggedin, setLoggedin } = useContext(UserContext);
    const emailInput = useRef();
    const passwordInput = useRef();
    const History = useHistory();
    const handleSubmit = function (event) {
        event.preventDefault();
        
        API.signup({ email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                console.log(data);

                setEmail(data.email);
                setLoggedin(true);
                History.push("/homepage");
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3"><br/>
                <StyleRoot><h1 style={styles.fadeInDown}>Welcome to Life Point 2.0</h1>
                    <p style={styles.fadeInDown}><br/>
                        Life Point 2.0 is here to assist users in helping manage their 
                        mental health in a format inspired by bullet journaling. Our comprehensive 
                        app is a journal, an affirmation generator, a wellness tracker, and a well-being resource all in one. 
                        With our latest feature users can now record video logs to assist on their journey to mental well-being. 

                    </p>
                   </StyleRoot>
                    <StyleRoot>
                        <h2 style={styles.fadeInDown}>Signup Form</h2>
                    </StyleRoot>
                    <form className="login" onSubmit={event => handleSubmit(event)} />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailInput} />
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordInput} />
                            <button type="submit" className="btn btn-default" onClick={event => handleSubmit(event)}>SignUp</button>
                        </div>
                       
                        <p id="logintext">Or Login <Link to="/login">here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
