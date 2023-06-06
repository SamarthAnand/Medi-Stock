import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/employee/AddEmployee";
import EmployeeList from "./components/employee/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/employee/UpdateEmployee";
import HomePage from "./components/home/HomePage";
import AddMedicine from "./components/medicine/AddMedicine";
import MedicineList from "./components/medicine/MedicineList";
import SignUp from "./components/home/SignUp";
import Login from "./components/home/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />

          <Route path="/medicineList" element={<MedicineList />} />
          <Route path="/addmedicine" element={<AddMedicine />} />
         
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
