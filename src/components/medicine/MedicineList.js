import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MedicineService from '../../services/MedicineService';
import Medicine from './Medicine';

const MedicineList = () => {
const navigate =useNavigate();


const [loading, setLoading] = useState(true);
const [medicines, setMedicines] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await MedicineService.getMedicines();
      setMedicines(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  fetchData();
}, []);

const deleteMedicine = (e, id) => {
  e.preventDefault();
  MedicineService.deleteMedicine(id).then((res) => {
    if (medicines) {
      setMedicines((prevElement) => {
        return prevElement.filter((medicine) => medicine.medicineId !== id);
      });
    }
  });
};

  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            <button 
            onClick={() => navigate("/addMedicine")}
            className="rounded bg-slate-600 text-white px-6 py-2">
                Add Medicine
            </button>
        </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr >
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Medicine ID</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Medicine Name</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Medicine Type</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Batch Code</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Expiry Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Purchase Price</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Selling Price</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Manufacturer</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Rack</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
           { /* {!loading && (  */}
            <tbody className="bg-white">
            { /* {medicines.map((medicine) => ( */}
                  <Medicine
                  ></Medicine>
                { /*  medicine={medicine} deleteMedicine={deleteMedicine} key={medicine.medicineId} */}
                  
             { /*  ))}  */}
             </tbody>
            { /*  )} */}
            </table>
        </div>
    </div>
  );
};

export default MedicineList;