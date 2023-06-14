import React from "react";
import { useNavigate } from "react-router-dom";

const Medicine = ({ medicine, deleteMedicine }) => {
  const navigate = useNavigate();
  
  const editMedicine = (e, medicineId) => {
    e.preventDefault();
    navigate(`/editMedicine/${medicineId}`);
  };

  return (
    <tr key={medicine.medicineId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.medicineName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.medicineType}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.batchCode}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.expiryDate}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.purchasePrice}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.sellingPrice}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.manufacturer}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{medicine.rack}</div>
      </td>


      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, medicineId) => editMedicine(e, medicine.medicineId)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, medicineId) => deleteMedicine(e, medicine.medicineId)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Medicine;