import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicineService from '../../services/MedicineService';

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

   // const [formValues, setFormValues] = useState(medicine);
    //const [formErrors, setFormErrors] = useState({});
    //const [isSubmit, setIsSubmit] = useState(false);

    const navigate =useNavigate(); 

    const handleChange = (e) => {
        const value = e.target.value;
        setMedicine({ ...medicine, [e.target.name]: value });
      };

      const saveMedicine = (e) => {
        e.preventDefault();
        MedicineService.saveMedicine(medicine)
        .then((response) => {
          console.log(response);
          navigate("/medicineList");
        })
        .catch((error) => {
          console.log(error);
        });
      };


      /*useEffect(()=>{
      
        if(Object.keys(formErrors).length === 0 && isSubmit){
          console.log("Medicine added");
        }
      },[formErrors])*/


    /*const validate = (value)=>{
        const errors = {}
       
        if(!value.medicineId){
          errors.medicineId = "Please provide Medicine ID"
        } 
        if(!value.batchCode){
          errors.batchCode = "Please provide Batch Code"
        } 
        if(!value.medicineName){
          errors.medicineName = "Please provide Medicine Name"
        } 
        if(!value.medicineType){
            errors.medicineType = "Please provide Medicine Type"
          } 
          if(!value.expiryDate){
            errors.expiryDate = "Please provide Expiry Date"
          } 
          if(!value.purchasePrice){
            errors.purchasePrice = "Please provide Purchase Price"
          } 
          if(!value.sellingPrice){
            errors.sellingPrice = "Please provide Selling Price"
          } 
          if(!value.manufacturer){
            errors.manufacturer = "Please provide Manufacturer"
          } 
          if(!value.rack){
            errors.rack = "Please provide Rack"
          } 
          
        return errors;
      }*/

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
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
                ></input>
            </div>
         

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Medicine Name
                </label>
                <input
                type="text"
                name="medicineName"
                value={medicine.medicineName}
                onChange={(e) => handleChange(e)} 
                className="h-10 w-96 border mt-2 px-2 py-2"
                
                ></input>
            </div>
            

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Medicine Type
                </label>
                <input type="text" name="medicineType" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.medicineType}
                onChange={(e) => handleChange(e)}></input>
            </div>
            

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Batch Code
                </label>
                <input type="number" name="batchCode" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.batchCode}
                onChange={(e) => handleChange(e)}></input>
            </div>
            

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Expiry Date
                </label>
                <input type="date" name="expiryDate" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.expiryDate}
                onChange={(e) => handleChange(e)} ></input>
            </div>
            

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Purchase Price
                </label>
                <input type="number" name="purchasePrice" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.purchasePrice}
                onChange={(e) => handleChange(e)}></input>
            </div>
            


            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Selling Price
                </label>
                <input type="number" name="sellingPrice" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.sellingPrice}
                onChange={(e) => handleChange(e)}></input>
            </div>
            

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Manufacturer
                </label>
                <input type="text" name="manufacturer" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.manufacturer}
                onChange={(e) => handleChange(e)}></input>
            </div>
            

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Rack
                </label>
                <input type="text" name="rack" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.rack}
                onChange={(e) => handleChange(e)}></input>
            </div>
           

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