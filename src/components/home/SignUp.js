import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { addTrainee } from "../Actions/TraineeActions";
import  {signUp} from '../service/AuthService';
function SignUp() {
    const navigate = useNavigate();
  const initialValues = {
    userId:"",
    userName:"",
    password:"",
    firstName:"",
    lastName:"",
    role:"",
    dob:"",
    doJoining:"",
    aadharNo: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // signUp(formValues).then((response) =>{
    //   console.log(response);
    //   console.log("success log");
    // }).catch((err)=>{
    //   console.log(err);
    // });
  };

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
    //  dispatch(addTrainee(formValues));
    axios.post(`http://localhost:8201/users/register`,formValues)
    .then((response) => 
    console.log(response)).catch(err => {
      console.log("error message",err);
    });
    setIsSubmit(false);
 //   navigate("/login");
  
  }
  },[formErrors])

  const validate = (value) => {
    const errors = {};
    if (!value.userName) {
      errors.userName = "Please provide username";
    }else if(!value.userName.match("^[a-zA-Z0-9]+( [A-Za-z0-9]+)*$")){
      errors.userName = "Invalid username"
    }
    if (!value.password) {
      errors.password = "Please provide password";
    } else if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (!value.password.match("^[a-zA-Z0-9$@]+$")){
      errors.password = "Invalid Password"
    }
    if (!value.firstName) {
      errors.firstName = "Please provide firstname";
    }
    if (!value.lastName) {
      errors.lastName = "Please provide lastname";
    }
    if (!value.role) {
      errors.role = "Please provide role";
    }
    
    if (!value.aadharNo) {
      errors.aadharNo = "Please provide Aadhar Number";
    } else if (value.aadharNo.length !== 12) {
      errors.aadharNo = "Aadhar number must be 12 digit number";
    }
    if (!value.dob) {
      errors.dob = "Please provide DOB";
    }
    if (!value.doJoining) {
      errors.dob = "Please provide DOJoining";
    }
    return errors;
  };

  return (
    <div data-testid="signUpTest">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
      <form onSubmit={handleSubmit} className="formView" style={{margin:"auto"}}>
        <h1>Register New User</h1>

        <div className="field">
          <label>Username</label>
          <input type="text" name="userName" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.userName}</p>

        <div className="field">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.password}</p>

        <div className="field">
          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.firstName}</p>

        <div className="field">
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.lastName}</p>

        <div className="field">
          <label>Role</label>
          <input type="text" name="role" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.role}</p>

        <div className="field">
          <label>Aadhar Number</label>
          <input type="text" name="aadharNo" onChange={handleChange} />
        </div>
        <p className="error">{formErrors.aadharNo}</p>

        <div className="field">
          <label>Date Of Birth</label>
          <input type="date" name="dob" onChange={handleChange}/>
        </div>
        <p className="error">{formErrors.dob}</p>
        <div className="field">
          <label>Date Of Joining</label>
          <input type="date" name="doJoining" onChange={handleChange}/>
        </div>
        <p className="error">{formErrors.doJoining}</p>
        
        <button type="submit" className="buttonBlue">
          Register
        </button>

        <div id="loginAfter"></div>
      </form>
    </div>
  );
}

export default SignUp;