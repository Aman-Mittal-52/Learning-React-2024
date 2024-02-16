import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the action types as "name", "gender", "role", "maritalStatus"(for updating "name", "gender", "role", "maritalStatus" ) and "reset" along with the default cases
// the reset action type should show reset the state to initial state
// the default case should throw an Error with message `invalid action type`.
const reducer = (state, action) => {

};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in the below variable on clicking the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    gender: "",
    role: "",
    isMarried: false
  })

  function handleSubmit() {

  }

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  dispatch({
                    type: "INPUT_NAME",
                    payload: e.target.value
                  })
                }
                } />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select
                name="gender"
                data-testid="gender-select"
                onChange={(e) => {
                  dispatch({
                    type: "INPUT_GENDER",
                    payload: e.target.value
                  })
                }
                }>
                <option value="Male">Male</option>
                <option value="Female">Felmale</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select
                name="role"
                data-testid="role-select"
                onChange={(e) => {
                  dispatch({
                    type: "INPUT_ROLE",
                    payload: e.target.value
                  })
                }
                }>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input
                  type={"checkbox"} name="isMarried" onChange={(e)=>{dispatch({
                    type:"INPUT_ISMARRIED",
                    payload:e.target.checked
                  })}}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        <h2 data-testid="no-user-container"></h2>
        {/* add table or h2 tag as per the problem statement */}
        <table data-testid="user-container">
          <thead>
            <tr>
              <th>S.no</th>
              <th>User</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Marital Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S.no</td>
              <td>User</td>
              <td>Gender</td>
              <td>Role</td>
              <td>Marital Status</td>
            </tr>
            {/* append the data here with the help of the `tr` and `UserRow` components. */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState }
