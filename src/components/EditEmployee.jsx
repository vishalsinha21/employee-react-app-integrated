import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

const EditEmployee = (props) => {

  const {id} = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
        .then(response => response.json())
        .then(result => {
          setFirstName(result.data.first_name)
          setLastName(result.data.last_name)
          setEmail(result.data.email)
        });
  }, [id])

  const onSubmit = (e) => {
    e.preventDefault()

    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "firstName": firstName,
        "email": email,
        "lastName": lastName,
      })
    })
        .then(response => {
          return response.json()
        })
        .then((data) => {
          if (data.errors) {
            console.log(data)
          } else {
            props.history.push('/')
          }
        })
        .catch(() => {
          console.log('Something went wrong, failed to edit employee')
        })

  }

  const deleteEmp = (e) => {
    e.preventDefault()
    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'DELETE'
    })
        .then((data) => {
          if (data.errors) {
            console.log(data)
          } else {
            props.history.push('/')
          }
        })
        .catch(() => {
          console.log('Something went wrong, failed to delete customer')
        })

  }

  return (
      <div className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 class="text-primary">Edit Employee</h1>

            <form className="add-employee-form">
              <div className="form-group">
                <label>First Name</label>
                <input className="form-control"
                       id="firstName"
                       type="text"
                       required={true}
                       value={firstName}
                       onChange={e => setFirstName(e.target.value)}
                       placeholder="First Name"/>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                    className="form-control"
                    id="lastName"
                    type="text"
                    required={true}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last Name"/>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control"
                       id="email"
                       type="text"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       placeholder="Phone"/>
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
              &nbsp;
              <button className="btn btn-danger" onClick={deleteEmp}>Delete</button>

            </form>
          </div>
        </div>
      </div>
  );
}

export default EditEmployee

