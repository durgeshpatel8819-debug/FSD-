
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
function Login({ user }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();

    const loginHandler = () => {
        if (email === "" || password === "") {
            alert("All fields are required")
            return
        }
        if (!user) {
            alert("User is not registered")
        }
        else if (user.password === password) {
            navigate("/dashboard");
            
        }
        else {
            alert("Incorrect Password")
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <input
                type="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>

            <input
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>

            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export default Login
