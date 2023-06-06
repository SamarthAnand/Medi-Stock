import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchUser } from '../Actions/UserAction';

function Login() {
   // const dispatch = useDispatch();
   // const data = useSelector((state) => state.user)

    const navigate = useNavigate();
    const initialValues = {username : "", password : ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormValues({...formValues, [name] : value});
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues))
      setIsSubmit(true);
    }
  
    useEffect(()=>{
      
      if(Object.keys(formErrors).length === 0 && isSubmit){
        // dispatch(fetchUser(formValues.username, formValues.password));
        console.log("admin and home here");
        // axios
        // .get(`http://localhost:8202/api/UserLogin/${formValues.username}/${formValues.password}`)
        // .then((data) => {
        //     document.getElementById('loginAfter').innerHTML = 'Login Successful'
        //     console.log(formValues)
        //     if(formValues.username === 'admin'){
        //       navigate('/admin')
        //     }else{
        //       navigate('/home');
        //     }
        // 
    //})
        // .catch((error) => {
        //   // console.log(error)
        //   document.getElementById('loginAfter').innerHTML = error.response.data.errorMessage
        // });
      }
    },[formErrors])
  
    const validate = (value)=>{
      const errors = {}
      if(!value.username){
        errors.username = "Please provide username"
      }
      if(!value.password){
        errors.password = "Please provide password"
      } else if (value.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (value.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    }
    return (
      <div className="Login" data-testid="loginTest">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        


        <div className='p-2 w-100'>
        <form onSubmit={handleSubmit} className=" shadow-lg p-3 mb-5  rounded formView">
          <h3>Login Form</h3>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p className='error'>{formErrors.username}</p>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className='error'>{formErrors.password}</p>
            <button type='submit' className="buttonBlue">Sign In</button>
          </div>
          <div id='loginAfter'></div>
        <Link to='/sign-up'>SignUp</Link>
        </form>
        </div>
      </div>
    
    );
}

export default Login;