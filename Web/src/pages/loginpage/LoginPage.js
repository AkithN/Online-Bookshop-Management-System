import React, { useState } from "react";
import './loginPage.style.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:8090"
});

const Login = () => {
    let navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [alertMessage, setAlertMessage] = useState(null);

    function onHandle(e) {
        const newUserData = { ...userData };
        newUserData[e.target.id] = e.target.value;
        setUserData(newUserData);
    }

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const response = await client.post('/users/signIn', {
                email: userData.email,
                password: userData.password,
            });

            if (!response.data.status) {
                setAlertMessage(response.data.message);
                return;
            }

            if (response.data.type === "user") {
                window.alert('login successfully!');
                let path = `/home`;
                navigate(path);
            } else if(response.data.type === "admin") {
                let path = `/Admin`;
                navigate(path);
                window.alert('login successfully!');
            }else {
                let path =`/`;
                navigate(path);
            }
        } catch (e) {
            console.error('Error', e);
        }
    }

    return (
        <body>
            <div className="bodywrap">
            <div className="login-container">
                <form className='login-form' onSubmit={e => onSubmit(e)}>
                    <h2>Log In</h2>
                    {alertMessage && <div className="alert-box">{alertMessage}</div>}
                    <div className="login-content">
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input id="email" value={userData.email} onChange={e => onHandle(e)} type="email" placeholder='Enter Email' className='form-control' />
                        </div>

                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input id="password" value={userData.password} onChange={e => onHandle(e)} type="password" placeholder='Enter Password' className='form-control' />
                        </div>
                    </div>
                    <div className="alert">
                        <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                        <label htmlFor="check">Remember me</label>
                    </div>
                    <div className="login-button-container">
                        <button className='btn-signin'>Sign in</button>
                    </div>
                    <div className="alert">
                        Don't have an Account  <Link to="/register">Register here</Link>
                    </div>
                </form>
            </div>
            </div>
        </body>
    );
}

export default Login;