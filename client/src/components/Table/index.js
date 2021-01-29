import React from "react";


function Table(props) {
  return (
  <tbody>
    <tr>
      <td>
          <img alt={props.lastName} src={props.picture} />
        </td>
      <td >{props.firstName} {props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  </tbody>
);
}

export default Table;
