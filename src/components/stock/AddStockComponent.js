
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import StockService from '../../services/StockService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AddStockComponent = () => {

    const [stock,setStock] = useState({
        
        id:"",
        batchCode: "", 
        product_Name: "", 
        cname: "", 
        expiryDate: "", 
        price:"", 
        description:"", 
        amount:"", 
    
    });

    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate =useNavigate(); 

const handleChange = (e) => {
    e.preventDefault();
        const { name, value } = e.target;
        setStock({ ...stock, [name]: value });
        if (isSubmit) {
            setErrors({ ...errors, [name]: "" });
        }
      };
      
      const validate = () => {
        const errors = {};
      
        // if (!stock.id) {
        //   errors.id = "Please provide Medicine ID";
        // }
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
      
const saveStock = (e) => {
    e.preventDefault();
    const newErrors = validate();
 if (Object.keys(newErrors).length === 0) {
    // Valid form, proceed with saving the medicine
    axios.post(`http://localhost:8080/api/stock`)
      .then((response) => {
        setStock(response.data)
        console.log(stock);
        navigate("/ListStockComponent");
        toast.success("Product saved successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to save Product.");
      });
  } else {
    // Invalid form, update the errors state and show an error toast notification
    setErrors(newErrors);
    setIsSubmit(true);
    toast.error("Please provide all the details and try again");
  }
};



      

      const reset = (e) => {
        e.preventDefault();
        setStock({
            id:"",
            batchCode: "", 
            product_Name: "", 
            cname: "", 
            expiryDate: "", 
            price:"", 
            description:"", 
            amount:"", 
        });
      };
      return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Purchase</h1>
                </div>
                {/* <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Medicine ID
                    </label>
                    <input 
                    type="number" 
                    name="id"
                    value={stock.id}
                    onChange={handleChange}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                  ></input>
                </div>
                {errors.id && <p className="text-red-500">{errors.id}</p>}
     */}
                 <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">
                         Medicine Name
                     </label>
                     <input
                    type="text" name="product_Name" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={stock.product_Name} 
                    onChange={handleChange}></input>
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
                     <button className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700" 
                     onClick={saveStock}>Save</button>
  
                     <button className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700"
                     onClick={reset}
                     >Clear</button>
                 </div>
    
             </div>
         </div>
       );
     };


 export default AddStockComponent;