import React, { useState } from 'react'

const AddEmployee = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    fetch(`https://reqres.in/api/users`, {
      method: 'POST',
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
          console.log('Something went wrong, failed to add employee')
        })

  }

  return (
      <div className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 class="text-primary">Add Employee</h1>

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
            </form>
          </div>
        </div>
      </div>
  );
}

export default AddEmployee

