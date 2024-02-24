import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import Loader from '../Components/Loader';
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const { authState, logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ redirectToDashboard, setRedirectToDashboard] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const resData = await res.json();
      if (resData.token) {
        authState.setToken(resData.token)
        authState.setAuth(true)
        setRedirectToDashboard(true)
        setLoading(false)
      }

    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error);
    }
  }

  if(loading){
    return <Loader/>
  }

  if (error) {
    return <h1>ERROR while fetching</h1>
  }

  if(redirectToDashboard && authState.token){
    return <Navigate to='/dashboard'/>
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder="password" />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Login;
