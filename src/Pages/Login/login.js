import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div>
            <form>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username" ></input>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"></input>
  </div>
  
  <Link to="/home">
  <button type="submit" class="btn btn-primary">Submit</button>
  </Link>
</form>
        </div>
    )
}
export default Login;