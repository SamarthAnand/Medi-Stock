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
import ViewById from "./components/sales/ViewById";
import ViewByDate from "./components/sales/ViewByDate";
import ViewAllSales from "./components/sales/ViewAllSales";
import Footer from "./components/home/Footer";
import AddStock from "./components/stocks/AddStock";

import StockList from "./components/stocks/StockList";
function App() {
  return (
    <>
      <BrowserRouter>
      <div class="flex flex-col h-screen justify-between">
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
         
          <Route path="/viewById" element={<ViewById />} />

          <Route path="/viewByDate" element={<ViewByDate />} />
          <Route path="/viewAllSales" element={<ViewAllSales />} />
          <Route path="/viewByEmployees" element={<ViewById />} />

          <Route path="/stockList" element={<StockList />}/>
          <Route path="/addstock" element={<AddStock />}/>
          </Routes>
          <Footer/>
          </div>
      </BrowserRouter>
     
    </>
  );
}

export default App;
