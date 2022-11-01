import React from 'react';
import Add from "../img/addAvatar.png";

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat-In</span>
                <span className='title'>Register</span>
                <form >
                    <input type="text" placeholder='your name' />
                    <input type="email" placeholder='your email'/>
                    <input type="password" placeholder='choose password'/>
                    <input style={{display:"none"}} type="file" id="avatar"/>
                    <label htmlFor='avatar'>
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>already registered? Login</p>
            </div>
        </div>
    )
}

export default Register;