import "./Login.css";
import React, { useRef, useState } from "react"
import Header from "../../components/Header/Header";
// import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()
    // const { signup, login } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSignUp(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return alert("Passwords do not match")
        }

        try {
            setLoading(true)
            // await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch (err) {
            alert(err.message.substring(
                err.message.indexOf(":") + 1,
                err.message.lastIndexOf("(")))
        }

        setLoading(false)
    }

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoading(true)
            // await login(loginEmailRef.current.value, loginPasswordRef.current.value)
            navigate("/")
        } catch(err) {
            alert(err.message.substring(
                err.message.indexOf(":") + 1,
                err.message.lastIndexOf("(")))
        }

        setLoading(false)
    }

    return (
        <div>
            <Header />
            <div className="Authentication">
                <div className="main">
                    <input type="checkbox" id="chk" />
                    <div className="signup">
                        <form onSubmit={handleSignUp}>
                            <label for="chk" className="sig">Sign up</label>
                            <div className="user-box">
                                <input type="text" title="Email" ref={emailRef} required />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Password" ref={passwordRef} required />
                                <label>Password</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Confirm password" ref={passwordConfirmRef}  required />
                                <label>Confirm Password</label>
                            </div>
                            <Link to="/home">
                            <button className="authBtn" disabled={loading} type="submit">Sign up</button>
                            </Link>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <label for="chk" className="log">Login</label>
                            <div className="user-box">
                                <input type="text" title="Enter Username" ref={loginEmailRef}  required />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Enter password" ref={loginPasswordRef}  required />
                                <label>Password</label>
                            </div>
                            <button className="authBtn" disabled={loading} type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
