import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login-page.css'

const Form = () => {
  const navigate = useNavigate();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const users = [{ username: "Admin", password: "123" }];

  const handleLogin = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);

    if (account && account.password === password) {
        localStorage.setItem("authenticated", true);
        navigate("/home");
    }
  }

  return (
    <form className="form-section" onSubmit={handleLogin}>
      <div>
        <label htmlFor="password">Username : </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <br/>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      
      <br/>
      <button type="submit" >
        Login
      </button>
    </form>
  )
}

export default Form
