import React from "react";


function Table(props) {

  // Render the UI for your table
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" className="btn-group-toggle" onClick={() => props.onSortChange()}> Name <i className="bi bi-caret-down-fill"></i></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.filteredList.map((item) => {
          return (
            <tr>
              <td><img src={item.picture.medium} alt={item.name.first} /></td>
              <td>{item.name.first} {item.name.last}</td>
              <td> {item.cell} </td>
              <td> {item.email}</td>
              <td> {new Date(Date.parse(item.dob.date)).toLocaleDateString()}</td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}

export default Table;