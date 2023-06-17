import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicineService from '../../services/MedicineService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMedicine = () => {

    const [medicine,setMedicine] = useState({
        
        medicineId:"",
        batchCode: "", 
        medicineName: "", 
        medicineType: "", 
        expiryDate: "", 
        purchasePrice:"", 
        sellingPrice:"", 
        manufacturer:"", 
        rack:""
        
    
    });

    const [errors, setErrors] = useState({});
    const navigate =useNavigate(); 

const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicine({ ...medicine, [name]: value });
        setErrors({ ...errors, [name]: "" });
      };
      
      const validate = () => {
        const errors = {};
      
        if (!medicine.medicineId) {
          errors.medicineId = "Please provide Medicine ID";
        }
        if(!medicine.batchCode){
          errors.batchCode = "Please provide Batch Code"
        } 
        if(!medicine.medicineName){
          errors.medicineName = "Please provide Medicine Name"
        } 
        if(!medicine.medicineType){
            errors.medicineType = "Please provide Medicine Type"
          } 
          if(!medicine.expiryDate){
            errors.expiryDate = "Please provide Expiry Date"
          } 
          if(!medicine.purchasePrice){
            errors.purchasePrice = "Please provide Purchase Price"
          } 
          if(!medicine.sellingPrice){
            errors.sellingPrice = "Please provide Selling Price"
          } 
          if(!medicine.manufacturer){
            errors.manufacturer = "Please provide Manufacturer"
          } 
          if(!medicine.rack){
            errors.rack = "Please provide Rack"
          } 
      
        return errors;
      };

     /* const saveMedicine = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
          
          MedicineService.saveMedicine(medicine)
            .then((response) => {
              console.log(response);
              navigate("/medicineList");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          
          setErrors(newErrors);
        }
      };*/
      
const saveMedicine = (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length === 0) {
    // Valid form, proceed with saving the medicine
    MedicineService.saveMedicine(medicine)
      .then((response) => {
        console.log(response);
        navigate("/medicineList");
        toast.success("Medicine saved successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to save medicine.");
      });
  } else {
    // Invalid form, update the errors state and show an error toast notification
    setErrors(newErrors);
    toast.error("Please provide all the details and try again");
  }
};

      

      const reset = (e) => {
        e.preventDefault();
        setMedicine({
          medicineId:"",
          batchCode: "", 
          medicineName: "", 
          medicineType: "", 
          expiryDate: "", 
          purchasePrice:"", 
          sellingPrice:"", 
          manufacturer:"", 
          rack:""
        });
      };
      return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Medicine</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Medicine ID
                    </label>
                    <input 
                    type="number" 
                    name="medicineId"
                    value={medicine.medicineId}
                    onChange={handleChange}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                  ></input>
                </div>
                {errors.medicineId && <p className="text-red-500">{errors.medicineId}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Medicine Name
                    </label>
                    <input
                    type="text"
                    name="medicineName"
                    value={medicine.medicineName}
                    onChange={handleChange}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                </div>
                {errors.medicineName && <p className="text-red-500">{errors.medicineName}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Medicine Type
                    </label>
                    <input type="text" name="medicineType" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.medicineType}
                    onChange={handleChange}></input>
                </div>
                {errors.medicineType && <p className="text-red-500">{errors.medicineType}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Batch Code
                    </label>
                    <input type="number" name="batchCode" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.batchCode}
                    onChange={handleChange}></input>
                </div>
                {errors.batchCode && <p className="text-red-500">{errors.batchCode}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Expiry Date
                    </label>
                    <input type="date" name="expiryDate" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.expiryDate}
                    onChange={handleChange} ></input>
                </div>
                {errors.expiryDate && <p className="text-red-500">{errors.expiryDate}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Purchase Price
                    </label>
                    <input type="number" name="purchasePrice" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.purchasePrice}
                    onChange={handleChange}></input>
                </div>
                {errors.purchasePrice && <p className="text-red-500">{errors.purchasePrice}</p>}
    
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Selling Price
                    </label>
                    <input type="number" name="sellingPrice" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.sellingPrice}
                    onChange={handleChange}></input>
                </div>
                {errors.sellingPrice && <p className="text-red-500">{errors.sellingPrice}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Manufacturer
                    </label>
                    <input type="text" name="manufacturer" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.manufacturer}
                    onChange={handleChange}></input>
                </div>
                {errors.manufacturer && <p className="text-red-500">{errors.manufacturer}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Rack
                    </label>
                    <input type="text" name="rack" className="h-10 w-96 border mt-2 px-2 py-2"
                    value={medicine.rack}
                    onChange={handleChange}></input>
                </div>
                {errors.rack && <p className="text-red-500">{errors.rack}</p>}
    
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700" 
                    onClick={saveMedicine}>Save</button>
    
                    <button className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700"
                    onClick={reset}
                    >Clear</button>
                </div>
    
            </div>
        </div>
      );
    };


export default AddMedicine;