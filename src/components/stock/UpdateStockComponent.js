import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import StockService from '../../services/StockService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const UpdateStock = () => {
  const { id } = useParams();
  const [stock,setStock] = useState({
    id:id,
    batchCode: "", 
    product_Name: "", 
    cname: "", 
    expiryDate: "", 
    price:"", 
    description:"", 
    amount:"", 

});
const navigate = useNavigate();
const [errors, setErrors] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(` http://localhost:8080/api/stock/${id}`);
        setStock(response.data);
        console.log(stock);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
    if (isSubmitted) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const updateStock = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Valid form, proceed with updating the stock
      axios.put(`http://localhost:8080/api/stock/${id}` )
        .then((response) => {
          setStock(response);
          navigate("/ListStockComponent");
          toast.success("Stock updated successfully!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to update stock.");
        });
    } else {
      // Invalid form, update the errors state and set the isSubmitted flag
      setErrors(newErrors);
      setIsSubmitted(true);
      toast.error("Please fix the errors and try again.");
    }
  };

  const validate = () => {
    const errors = {};
  
    if (!stock.id) {
      errors.id = "Please provide Stock ID";
    }
    if(!stock.batchCode){
      errors.batchCode = "Please provide Batch Code"
    } 
    if(!stock.product_Name){
      errors.product_Name = "Please provide Product Name"
    } 
    if(!stock.cname){
        errors.cname = "Please provide Company name "
      } 
      if(!stock.expiryDate){
        errors.expiryDate = "Please provide Expiry Date"
      } 
      if(!stock.price){
        errors.price = "Please provide Price"
      } 
      if(!stock.description){
        errors.description = "Please provide description"
      } 
      if(!stock.amount){
        errors.amount = "Please provide amount"
      } 
  
    return errors;
  };
 
  
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Medicine</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Medicine ID
                    </label>
                    <input 
                    type="number" 
                    name="medicineId"
                    value={stock.id}
                    onChange={handleChange}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                  ></input>
                </div>
                {errors.id && <p className="text-red-500">{errors.id}</p>}
    
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Medicine Name
                     </label>
                     <input
                    type="text"
                    name="product_Name"
                    value={stock.product_Name}
                    onChange={handleChange}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                   </div>
                 {errors.product_Name && <p className="text-red-500">{errors.product_Name}</p>}
    
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                        Description
                     </label>
                     <input type="text" name="description" className="h-10 w-96 border mt-2 px-2 py-2"
                     value={stock.description}
                    onChange={handleChange}></input>
                 </div>
                 {errors.description && <p className="text-red-500">{errors.description}</p>}
  
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Batch Code
                     </label>
                     <input type="text" name="batchCode" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={stock.batchCode}
                    onChange={handleChange}></input>
                 </div>
                 {errors.batchCode && <p className="text-red-500">{errors.batchCode}</p>}
    
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Expiry Date
                     </label>
                     <input type="date" name="expiryDate" className="h-10 w-96 border mt-2 px-2 py-2"
                     value={stock.expiryDate}
                     onChange={handleChange} ></input>
                 </div>
                 {errors.expiryDate && <p className="text-red-500">{errors.expiryDate}</p>}
    
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Price
                     </label>
                     <input type="number" name="price" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={stock.price}
                    onChange={handleChange}></input>
                </div>
                {errors.price && <p className="text-red-500">{errors.price}</p>}
    
    
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Company Name
                     </label>
                     <input type="text" name="cname" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={stock.cname}
                    onChange={handleChange}></input>
                </div>
                {errors.cname && <p className="text-red-500">{errors.cname}</p>}
    
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Amount
                     </label>
                     <input type="number" name="amount" className="h-10 w-96 border mt-2 px-2 py-2"
                     value={stock.amount}
                     onChange={handleChange}></input>
                 </div>
                 {errors.amount && <p className="text-red-500">{errors.amount}</p>}
        
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateStock}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/ListStockComponent")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;