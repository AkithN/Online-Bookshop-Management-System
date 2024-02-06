import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './loginPage.style.css';
import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8090"
});


const Register = () => {
    let navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        type: "",
        password: ""
    });

    function handle(e) {
        const newUserData = {...userData}
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData);
    }

    async function submit(e) {
        e.preventDefault();
        const response = await client.post('/users/signUp', {
            name: userData.name,
            email: userData.email,
            type: userData.type,
            password: userData.password
        })
        console.log('response.data', response.data)
        console.log('userData.type', userData.type)

        if (userData.type === "user") {
            let path = `/home`;
            navigate(path);
        } else if(userData.type === "admin")
        {
            let path = `/Admin`;
            navigate(path);
        }else{
            let path = `/register`;
            navigate(path);
        }
    }

    return (
        <body>
            <div className="bodywrap">
        
            <div className="login-container">
                <form className='register-form' onSubmit={e => submit(e)}>
                    <h2>Registration</h2>
                    <div class="login-content">
                    <div class="input-box">
                        <label className='left-align-label' htmlFor="name">Name</label>
                        <input id="name" value={userData.name} onChange={e => handle(e)} type="text"
                               placeholder='Enter Your Full Name' className='form-control'/>
                    </div>
                    <div class="input-box">
                        <label className='left-align-label' htmlFor="email">Email</label>
                        <input id="email" value={userData.email} type="email" onChange={e => handle(e)}
                               placeholder='Enter Your Email' className='form-control'/>
                    </div>
                    <div class="input-box">
                        <label className='left-align-label' htmlFor="password">Password</label>
                        <input id="password" type="password" value={userData.password} onChange={e => handle(e)}
                               placeholder='Enter Your Password' className='form-control'/>
                    </div>
                    <div class="input-box">
                        <label className='left-align-label' htmlFor="type">Type of User</label>
                        <select id="type" value={userData.type} onChange={e => handle(e)} className='form-select'>
                            <option value="">Select User type</option>
                            <option value="user">user</option>
                        </select>
                    </div>
                    </div>

                    <div class="login-button-container">
                        <button className='btn btn-primary'>Register & SignIn</button>
                    </div>
                    <div class="alert">
                        Already Registered <Link to="/" className='ms-2'>Sign in</Link>
                    </div>
                </form>
            </div>
            </div>

        </body>
    )
}

export default Register