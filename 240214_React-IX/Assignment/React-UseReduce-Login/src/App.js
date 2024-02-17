import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default case.
//The default case within reducer function should throw an error with message "invalid action type"
const reducer = (state, action) => {
  switch (action.type) {
    case "email": { 
      return {
        ...state,
        email:action.payload
      }
    }
    case "password": { 
      return {
        ...state,
        password:action.payload
      }
    }
    case "reset": { 
      return {
        ...initialState
      }
    }
    default:{
      throw new Error("invalid action type")
    }
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState)
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({...state});

  function handleChange(e,type) {
    dispatch({
      type:type,
      payload:e.target.value
    })
  }
  function handleSubnit(e) {
    e.preventDefault();
    setSubmittedData({
      email:state.email,
      password:state.password,
    })
    dispatch({
      type:"reset"
    })
  }

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit={handleSubnit}>
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" onChange={(e)=>{handleChange(e, "email")}}/>
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="text" data-testid="user-password" onChange={(e)=>{handleChange(e, "password")}}/>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* If there is data in the submittedData variable after submitting the form, show the below div by updating it else show the No details found div. */}
      <div>
        <div data-testid="submitted-data-email">User Email:{submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password:{submittedData.password}</div>
      </div>

      {/* Assume below div as No details found div for better understanding */}
      {/* {state.email && state.password ?
        <div data-testid="no-details-container">No details found</div> :
        <div>
          <div data-testid="submitted-data-email">
            User Email: masai@gmail.com
          </div>
          <div data-testid="submitted-data-password">
            User Password: password
          </div>
        </div>
      } */}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
