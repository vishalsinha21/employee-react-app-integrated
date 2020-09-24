import React from 'react'
import { Link } from "react-router-dom";

const Employee = ({employee}) => {

  return (
      <tr>
        <td>{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td>{employee.email}</td>
        <td><Link to={`/edit/${employee.id}`} className="btn btn-default btn-sm">Edit</Link></td>
      </tr>
  )
}

export default Employee
