import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { authState, loginUser, logoutUser } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      let data = await res.json();
      if(data.token){
        loginUser(true, data.token)
        setRedirectToDashboard(true)
      }

    } catch (error) {
      console.log(error);
    }
  }

  if(redirectToDashboard && authState.isAuth){
    return <Navigate to='/dashboard'/>
  }
  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit} style={{
        width: "400px",
        padding: "30px",
        fontSize: "50px",
        margin: "40px auto",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        border: "2px solid black",
        borderRadius: "30px"
      }}>
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
              placeholder="password"
              onChange={(e) => { setPassword(e.target.value) }}
            />
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
