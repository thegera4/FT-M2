import React, { useState } from 'react';

export default function Form() {

  //1 estado para cada input:
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')

  //1 solo estado para todos los inputs:
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = function(e) {
    setInput({...input, [e.target.name]: e.target.value});
    setErrors(validate({...input, [e.target.name]: e.target.value}));
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          className={errors.username && 'danger'}
          type="text" 
          name="username" 
          value={input.username} 
          onChange={handleInputChange} />
        {errors.username && (<p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label>Password:</label>
        <input 
          className={errors.password && 'danger'}
          type="password" 
          name="password" 
          value={input.password} 
          onChange={handleInputChange} />
        {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>
      <div>
        <input 
          type="submit" 
          value="Send"/>
      </div>
  </form>
  )
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) { 
    errors.username = 'Username is invalid';
  }
  if (!input.password) {  //else if para mostrar 1 error por 1 error
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) { 
    errors.password = 'Password is invalid';
  } 
  
  return errors;
};
