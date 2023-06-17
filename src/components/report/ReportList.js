import React from 'react'
import { useNavigate } from 'react-router-dom';

const ReportList = () => {
const navigate =useNavigate();

  return (
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr >
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Medicine</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Medicine company</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Quantity sold</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Price</th>
                    </tr>
                </thead >
                <tbody className="bg-white">   
                </tbody>
            </table>
        </div>
  );
};

export default ReportList;