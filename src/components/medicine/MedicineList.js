import React from 'react'
import { useNavigate } from 'react-router-dom';
import Medicine from './Medicine';

const MedicineList = () => {
const navigate =useNavigate();

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
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Medicine Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Stock</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Expiry Date</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                        <Medicine></Medicine>    
                </tbody>
            </table>
        </div>




    </div>
  );
};

export default MedicineList;