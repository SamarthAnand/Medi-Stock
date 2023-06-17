import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from"../../services/EmployeeService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEmployee = () => {
  const employee = {id: "",
  firstName: "",
  lastName: "",
  emailId: ""};

  
  const [formValues, setFormValues] = useState(employee);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    // EmployeeService.saveEmployee(employee)
    //   .then((response) => {
    //     console.log(response);
    //     
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setFormErrors(validate(formValues))
      setIsSubmit(true);
  };
  useEffect(()=>{
      
    if(Object.keys(formErrors).length === 0 && isSubmit){
      // dispatch(fetchUser(formValues.username, formValues.password));
      console.log("employee added");
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
   
    if(!value.firstName){
      errors.firstName = "Please provide firstName"
    } 
    if(!value.lastName){
      errors.lastName = "Please provide lastName"
    } 
    if(!value.emailId){
      errors.emailId = "Please provide emailId"
    } 
    return errors;
  }

  const reset = (e) => {
    e.preventDefault();
    setFormValues(employee);
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>

        </div>
        <p className='error'>{formErrors.firstName}</p>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <p className='error'>{formErrors.lastName}</p>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={formValues.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <p className='error'>{formErrors.emailId}</p>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
