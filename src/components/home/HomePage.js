import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
function HomePage() {
    const navigate = useNavigate();
    const formStyle = {
      backgroundColor: "#FFFAFA",
      padding: "15px"
  };
  return (
    <div  className="container mx-auto my-auto" style={formStyle}>
        <p>HomePage </p>
        <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={() => navigate("/employeeList")}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Employees
        </button>
        <button
          onClick={() => navigate("/medicineList")}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Medicine
        </button>
        <button
        onClick={() => navigate("/stockList")}
        className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Stock
        </button>
        <button
          onClick={() => navigate("/viewAllSales")}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Sales
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Purchase
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Report
        </button>
</div>
    </div>
  )
}

export default HomePage