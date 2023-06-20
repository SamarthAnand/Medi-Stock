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
    const initialValues = {"userName" : "", "password" : ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormValues({...formValues, [name] : value});
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setUserName(formValues.userName);
      setPassword(formValues.password);
      setFormErrors(validate(formValues))
      setIsSubmit(true);
    }
  
    useEffect(()=>{
      
      if(Object.keys(formErrors).length === 0 && isSubmit){
        // dispatch(fetchUser(formValues.userName, formValues.password));
        console.log("admin and home here");
        axios
        .post(`http://localhost:8202/users/token`,{userName,password})
        .then((response) => {
           // document.getElementById('loginAfter').innerHTML = 'Login Successful'
            console.log(response.data);
           if(response.data.accessToken)
        {
          localStorage.setItem("token", JSON.stringify(response.data));
        }
             
          
           
        
    })
        .catch((error) => {
          console.log(error)
         // document.getElementById('loginAfter').innerHTML = error.response.data.errorMessage
        });
      }
      setIsSubmit(false);
    },[formErrors])
  
    const validate = (value)=>{
      const errors = {}
      if(!value.userName){
        errors.userName = "Please provide userName"
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
        


        <div className='container mx-auto my-8'>
        <form onSubmit={handleSubmit} className=" shadow-lg p-3 mb-5  rounded formView">
          <h3>Login Form</h3>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>userName</label>
              <input
                type="text"
                name="userName"
                placeholder="userName"
                value={formValues.userName}
                onChange={handleChange}
              />
            </div>
            <p className='error'>{formErrors.userName}</p>

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
            <button type='submit' className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Sign In</button>
            <Link className="rounded bg-slate-600 text-white px-6 py-2 font-semibold" to='/sign-up'>SignUp</Link>
       
          </div>
          <div id='loginAfter'></div>
        </form>
        </div>
      </div>
    
    );
}

export default Login;