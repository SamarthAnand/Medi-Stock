import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
function HomePage() {
    const navigate = useNavigate();

  return (
    <div>
        <p>HomePage </p>
        <button
          onClick={() => navigate("/employeeList")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Employees
        </button>
        <button
          onClick={() => navigate("/medicineList")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
            Medicine
        </button>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Stock
        </button>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Sales
        </button>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Purchase
        </button>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Report
        </button>

    </div>
  )
}

export default HomePage