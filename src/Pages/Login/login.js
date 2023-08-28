import "./Login.css";
import axios from "axios";
import React, { useRef, useState } from "react"
import Header from "../../components/Header/Header";
// import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()
    const [role,setRole] = useState("Admin")
    const [accNo,setaccNo] = useState("0")
    // const { signup, login } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSignUp(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            toast.warn("Passwords do not match.")
            return;
        }
            loginEmailRef.current=emailRef.current;
            loginPasswordRef.current=passwordRef.current;
        try {
            setLoading(true)
            console.log(role.current);
            await axios.post("https://localhost:7254/api/Auth/register",{
                username: emailRef.current.value,
                password: passwordRef.current.value,
                role:role,
                accNo:accNo,
            }).then((response)=>{
                console.log(response.data);
                toast.success("Registered Successfully.");
            });
            handleLogin(e)
            // await signup(emailRef.current.value, passwordRef.current.value)
            //navigate("/")
        } catch (err) {
            alert(err)
        }

        setLoading(false)
    }

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoading(true)
            await axios.post("https://localhost:7254/api/Auth/login",{
                username: loginEmailRef.current.value,
                password: loginPasswordRef.current.value,
            }).then((response)=>{
                console.log(response.data);
                toast.success("Login Successfully.");
                localStorage.setItem("token",response.data['token']);
                localStorage.setItem("role",response.data['role']);
                localStorage.setItem("accNo",response.data['accNo']);

            });
            // await login(loginEmailRef.current.value, loginPasswordRef.current.value)
            navigate("/home")
            //setUserName("");
            //setPassword("");
        } catch(err) {
            alert(err)
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
                            
                            <div className="user-box">
                                {/* <input type="text" title="Role" ref={role}  required /> */}
                                {/* <label>Role</label> */}
                                <select value={role}
                                className="form-control1"
                                id="Role"
                                onChange={(event) => {
                                    (setRole(event.target.value))
                                }}>
                                <option value="Admin"> Admin</option>
                                <option value="User"> User</option>
                                </select>
                            </div>
                            {role=="User" &&  <div className="user-box">
                                <input type="text" title="accNo"  onChange={(event) => {setaccNo(event.target.value);}} required />
                                <label>AccNo</label>
                            </div>}
                            {/* <Link to="/home"> */}
                            <button className="authBtn" disabled={loading} type="submit">Sign up</button>
                            {/* </Link> */}
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
