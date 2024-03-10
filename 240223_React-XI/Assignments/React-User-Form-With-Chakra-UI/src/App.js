import { useReducer, useState } from "react";
import { Box, Button, Center, Checkbox, FormControl, Heading, FormLabel, Input, Select, TableContainer, Table, Tr, Th, Tbody, Thead } from '@chakra-ui/react'
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the action types as "name", "gender", "role", "maritalStatus", and "reset" along with the default case should throw an Error with message invalid action type.
// here action type name is used for updating name, action type gender for updating gender and so on.
const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
    case 'gender':
    case 'role':
    case 'maritalStatus':
      console.log(state);
      return { ...state, [action.type]: action.payload };
    case 'reset':
      console.log(state);
      return {...action.payload}
    default:
      throw new Error('invalid action type');
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);


  // note : Remove below const and instead import them from chakra import the following components from

  // use Table Component from chakra ui to display the details

  // import and use the useReducer hook here, with the reducer function and the initialState.

  function handleChange(e) {
    dispatch({
      type: e.target.name,
      payload: e.target.type === "checkbox" ? e.target.checked ? "married" : "unmarried" : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData([...submittedData, state])
    dispatch({
      type:"reset",
      payload:initialState
    })
  }

  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box  boxShadow='inner' p='6' rounded='md'm={'auto'} w={'20%'}>
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>

            <Input type="text" name="name" value={state.name} placeholder="Name" onChange={handleChange} />
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select" value={state.gender} placeholder="Gender" onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </Select>
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select" value={state.role} placeholder="Role" onChange={handleChange}>
              <option>FrontEnd Developer</option>
              <option>BackEnd Developer</option>
              <option>FullStack Developer</option>
            </Select>

            <Checkbox name="maritalStatus" value={state.maritalStatus?true:false} onChange={handleChange}>Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>

      <Center>
        {submittedData.length ?
          (<TableContainer boxShadow={"2xl"}>
            <Table
              data-testid="user-container"
              variant="striped"
              colorScheme="cyan"
              p={3}
            >
              <Thead>
                <Tr>
                  <Th>S.no</Th>
                  <Th>User</Th>
                  <Th>Gender</Th>
                  <Th>Role</Th>
                  <Th>Marital Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {submittedData.map((data,i)=> <UserRow key={i} {...data} id={i+1} />)}
              </Tbody>
            </Table>
          </TableContainer>) :
        (<Heading as="h1" data-testid="no-user-container" >
          no users found
        </Heading>) }
      </Center>
          {/* Eiter above TableContainer or below Heading with data-testid="no-user-container" should exist on DOM at a time */ }
        {/* map the submittedData in tbody using Tr and UserRow component to display the data in tabular format or Heading with data-testid="no-user-container" if there is no user data */}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
