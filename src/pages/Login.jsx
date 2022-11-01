import React from 'react';
import Add from "../img/addAvatar.png";
const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat-In</span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="email" placeholder='your email'/>
                    <input type="password" placeholder='choose password'/>
                    <button>Sign in</button>
                </form>
                <p>not registered? Register</p>
            </div>
        </div>
    )
}

export default Login;