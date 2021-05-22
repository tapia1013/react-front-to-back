import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';



const Register = () => {
  // initialize context
  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })


  // destructure so we can use above as variables
  const { name, email, password, password2 } = user;



  // change state by grabbing values from inputs
  const onChange = e => setUser({
    // spread in the user  info
    ...user,
    // key is the name and set value as value
    [e.target.name]: e.target.value
  })



  // for the form
  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (password !== password2) {
      setAlert('Passwords do not match')
    } else {
      console.log('Register Submit')
    }

    // call method to register
    // console.log('Register Submit')
  }





  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

// video 4 user registration

export default Register;