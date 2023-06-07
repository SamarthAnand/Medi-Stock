import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewByDate() {
  const navigate = useNavigate();
  let initialSale = [] ;
  let [sale, setSale] = useState(initialSale);

  const [saleDate,setSaleDate] = useState();
    const [btn,setButton] = useState(0);
  
// useEffect(() => {
//   const URL = `http://localhost:8080/flat/viewflat/${saleDate}`;
//   axios
//     .get(URL)
//     .then((response) => {
//         setSale(response.data)
//         console.log(response.data)
//     })
//     .catch((error) => console.log(error.message));
// },[btn])

// console.log(flat.flatAddress);

const handleBtnClick = (e)=>{
  e.preventDefault();
  setButton(saleDate)
}

return (
  <React.Fragment>
    <form className="view-form">
<h1 className="form-text ">View Sale By Date</h1>
<br/>
<input name="username" type="date" placeholder="Sale ID*" className="username"
value = {saleDate}
onChange={e=>setSaleDate(e.target.value)}
/>
<button 
className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
 onClick={handleBtnClick}>View Sales</button>

<br/>
</form>

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



</React.Fragment>
);
}

export default ViewByDate;