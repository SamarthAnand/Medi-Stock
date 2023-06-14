import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MedicineService from "../services/MedicineService";

const UpdateMedicine = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(medicine);
  const [medicine,setMedicine] = useState({
        
    medicineId: medicineId,
    batchCode: "", 
    medicineName: "", 
    medicineType: "", 
    expiryDate: "", 
    purchasePrice:"", 
    sellingPrice:"", 
    manufacturer:"", 
    rack:""
    

});


const handleChange = (e) => {
    const value = e.target.value;
    setMedicine({ ...medicine, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MedicineService.getMedicineById(medicine.medicineId);
        setMedicine(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    setFormErrors(validate(formValues))
    fetchData();
  }, []);

  const validate = (value)=>{
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
  }

  const updateMedicine = (e) => {
    e.preventDefault();
    console.log(medicine);
    MedicineService.updateMedicine(medicine,medicineId)
      .then((response) => {
        navigate("/medicineList");
      })
      .catch((error) => {
        console.log(error);
      });
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
                value={medicine.medicineId}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"
                ></input>
            </div>
            <p className='error'>{formErrors.medicineId}</p>

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
            <p className='error'>{formErrors.medicineName}</p>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Medicine Type
                </label>
                <input type="text" name="medicineType" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.medicineType}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <p className='error'>{formErrors.medicineType}</p>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Batch Code
                </label>
                <input type="number" name="batchCode" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.batchCode}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <p className='error'>{formErrors.batchCode}</p>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Expiry Date
                </label>
                <input type="date" name="expiryDate" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.expiryDate}
                onChange={(e) => handleChange(e)} ></input>
            </div>
            <p className='error'>{formErrors.expiryDate}</p>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Purchase Price
                </label>
                <input type="number" name="purchasePrice" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.purchasePrice}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <p className='error'>{formErrors.purchasePrice}</p>


            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Selling Price
                </label>
                <input type="number" name="sellingPrice" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.sellingPrice}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <p className='error'>{formErrors.sellingPrice}</p>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Manufacturer
                </label>
                <input type="text" name="manufacturer" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.manufacturer}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <p className='error'>{formErrors.manufacturer}</p>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">
                    Rack
                </label>
                <input type="text" name="rack" className="h-10 w-96 border mt-2 px-2 py-2"
                value={medicine.rack}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <p className='error'>{formErrors.rack}</p>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateMedicine}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/medicineList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMedicine;