import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewAllSales() {
  const navigate = useNavigate();
    let initialSale = [] ;
  let [sale, setSale] = useState(initialSale);

  const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "15px"
};
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

//   useEffect(() => {
//     const URL = `http://localhost:8080/flat/viewallflat`;
//     axios
//       .get(URL)
//       .then((response) => {
//           setFlat(response.data)
//           console.log(response.data)
//       })
//       .catch((error) => console.log(error.message));
//   },[])

  return (
    
    <div className="container mx-auto my-8" style={formStyle}>
      <button
          onClick={() => navigate("/viewByDate")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
            view By Date
        </button>
        <button
          onClick={() => navigate("/viewById")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
            view By Id
        </button>
      <div className="flex shadow border-b">
      
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr >
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Sale Id</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Batch Code</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Customer Code</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Date</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Quantity</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Price</th>
                    </tr>
                </thead>
                <tbody>
            {sale&&sale.map((sale) => (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
            
          </tbody>
     
            </table>
        </div>

                        
    </div>
  );
}

export default ViewAllSales;