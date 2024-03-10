import React from "react";

// use Td component from  from chakra ui to display the user details
const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return (<tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{role}</td>
            <td>{maritalStatus}</td>
        </tr>);
};
export { UserRow };
