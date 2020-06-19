import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialLoginFormValues = {
  username: '',
  password: ''
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
  const [loginUser, setLoginUser] = useState([])


  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    setLoginFormValues({...loginFormValues, [name]:value})
  };

  const { push } = useHistory();

  // const onSubmit = evt => {
  //   evt.preventDefault()
  //   const newLoginUser = {
      
  //     username: loginFormValues.username,
  //     password: loginFormValues.password
  //   }
  //   setLoginFormValues(initialLoginFormValues)
  //   setLoginUser([...loginUser, newLoginUser])   
  // };


  const onLogin = evt => {
    
    axiosWithAuth()
    .post('/api/colors', loginFormValues)
    .then(res => {
      window.localStorage.setItem('token', res.data.payload)
      push('/api/login')
    })
    .catch(err =>{
      console.log(err)
    })
  };



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <h2>Log In</h2>
            {/* <form onSubmit={onSubmit}> */}
            <form onSubmit={onLogin}>

                <label>Username:&nbsp;
                    <input 
                    id='username'
                    name='username'
                    type='text'
                    value={loginFormValues.username}
                    onChange={onInputChange}
                    />
                </label>

                <label>Password:&nbsp;
                    <input 
                    id='password'
                    name='password'
                    type='text'
                    value={loginFormValues.password}
                    onChange={onInputChange}
                    />
                </label>

                <button>Submit</button>
            </form>
      
    </>
  );
};

export default Login;
