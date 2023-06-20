import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(()=>{
  //  console.log(formErrors)
    try{
    //  dispatch(addTrainee(formValues));
    axios.get(`http://localhost:8209/employee/all-employee`)
    .then((response) => {
    console.log(response);
    setEmployees(response.data)})
    .catch(err => {
      console.log("error message",err);
    });
   // setIsSubmit(false);
   
  }catch(error){
    console.log(error);
  }
  },[])

 

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
      <div className="col-md-8">
        <h2 className="mb-4">Employee List</h2>
      </div>
     <div className="col-md-4 text-end">
        <button
          onClick={() => navigate("/addEmployee")}
          className="btn btn-primary">
          Add Employee
        </button>
  </div>
  </div>
      <div className="flex shadow border-b">
        <table className="table">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
        
            <tbody className="bg-white">
            
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}></Employee>
              ))}
            </tbody>
         
              
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
