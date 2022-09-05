import React from 'react';
import './Login.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const router = useNavigate();

    return (
        <div className="container">
            <div className="left">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt=""/>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>

            <div className="right">
                <form className='login__form'>
                    <input type="text" placeholder="Email addess or phone number"/>
                    <input type="password" placeholder="Password"/>
                    <a className="loginBtn">Log In</a>
                    <a className="forget">Forgotten password?</a>
                    <div className="sign-up">
                        <a onClick={() => router('/register')} className="signupBtn">Create New Account</a>
                    </div>
                </form>
                <p><b>Create a Page</b> for a celebrity, band or business.</p>
            </div>
        </div>
    );
};

export default Login;