import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import MedicineService from '../../services/MedicineService';
import Medicine from './Medicine';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit } from '@fortawesome/free-solid-svg-icons';

const MedicineList = () => {
const navigate =useNavigate();

const [loading, setLoading] = useState(true);
const [medicines, setMedicines] = useState([]);


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

const deleteMedicine = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this medicine?");
  if (confirmDelete) {
    try {
      await MedicineService.deleteMedicine(id);
      setMedicines(prevMedicines =>
        prevMedicines.filter(medicine => medicine.medicineId !== id)
      );
      toast.success("Medicine Deleted Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete medicine");
    }
  }
};

return (
  <div className="container mt-4">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <div className="row">
      <div className="col-md-8">
        <h2 className="mb-4">Medicine List</h2>
      </div>
      <div className="col-md-4 text-end">
        <Link to="/addMedicine" className="btn btn-primary">
          Add Medicine
        </Link>
      </div>
    </div>
    <table className="table">
      <thead>
        <tr className ="uppercase">
          <th>Medicine ID</th>
          <th>Medicine Name</th>
          <th>Medicine Type</th>
          <th>Batch Code</th>
          <th>Expiry Date</th>
          <th>Purchase Price</th>
          <th>Selling Price</th>
          <th>Manufacturer</th>
          <th>Rack</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map((medicine) => (
          <tr key={medicine.medicineId}>
            <td>{medicine.medicineId}</td>
            <td>{medicine.medicineName}</td>
            <td>{medicine.medicineType}</td>
            <td>{medicine.batchCode}</td>
            <td>{medicine.expiryDate}</td>
            <td>{medicine.purchasePrice}</td>
            <td>{medicine.sellingPrice}</td>
            <td>{medicine.manufacturer}</td>
            <td>{medicine.rack}</td>

            <td>
              <Link to={`/editMedicine/${medicine.medicineId}`} className="btn btn-sm me-2">
              
              <i class="far fa-edit" style={{color: '#140505'}}></i> 
              </Link>
              <button
                className="delete-btn" 
                onClick={() => deleteMedicine(medicine.medicineId)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};
  

export default MedicineList;