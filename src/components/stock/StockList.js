import React from 'react'
import { useNavigate } from 'react-router-dom';
import Stock from './Stock';

const StockList = () => {
const navigate =useNavigate();

  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            <button 
            onClick={() => navigate("/addStock")}
            className="rounded bg-slate-600 text-white px-6 py-2">
                Add Medicine
            </button>
        </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr >
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Product Code</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Product Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Batch</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Company Name</th>                        
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Expiry Date</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Stock Amount</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Price</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                        <Stock></Stock>    
                </tbody>
            </table>
        </div>




    </div>
  );
};

export default StockList;