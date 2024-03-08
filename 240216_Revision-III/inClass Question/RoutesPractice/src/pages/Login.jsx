import { useContext, useReducer } from "react";
// Step 1:  import useReducer
import { AuthContext } from "../Context/AuthContext";

// Step 2 : Write initialState
const initState = {
  email: "",
  password: "",
};

// Step 3 : Write reducer function
function reducer(state, { type, payload }) {
  switch (
    type // action.type --> "CHANGE_EMAIL", "CHANGE_PASSWORD"
  ) {
    case "CHANGE_EMAIL": {
      const updatedState = {
        ...state,
        ...payload,
      };
      return updatedState;
    }
    case "CHANGE_PASSWORD": {
      const updatedState = {
        ...state,
        ...payload,
      };
      return updatedState;
    }
    default: {
      throw new Error(`invalid action type`);
    }
  }
}

export default function Login() {
  const {authDetails,SetAuthDetails} = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initState);


  async function handleClick() {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await res.json();
      SetAuthDetails({
        token:data.token,
        isAuth: data.token ? true :false
      })
      console.log(data.token);
      console.log(authDetails);
      // Complete the missing code
    } catch (error) {
      console.log(error);
    }
  }

  const { email, password } = state;
  return (
    <div>
      <h1>Login</h1>
      <div className="login-form">
        <label htmlFor="email">
          Email :{" "}
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={function (e) {
              dispatch({
                type: "CHANGE_EMAIL",
                payload: {
                  [e.target.id]: e.target.value, 
                },
              });
            }}
          />
        </label>
        <label htmlFor="password">
          Password :{" "}
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={function (e) {
                dispatch({
                    type:"CHANGE_PASSWORD",
                    payload:{[e.target.id]:e.target.value}
                })
             // 1. Complete missing code
            }}
          />
        </label>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}
