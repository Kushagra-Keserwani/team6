import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <Link to="/home">
                    <button>Login</button>
                </Link>
            </form>
        </div>
    )
}
export default Login;