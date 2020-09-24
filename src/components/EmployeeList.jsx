import React, { useEffect, useState } from 'react'
import Employee from './Employee'
import { Link } from "react-router-dom";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(result => setEmployees(result.data));
  }, [])

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 class="text-primary">Employees</h1>
            <Link to="/add" className="btn btn-primary">Add</Link>
            <table className="table">
              <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {employees.map(employee =>
                  <Employee key={employee.id} employee={employee}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )

}

export default EmployeeList
