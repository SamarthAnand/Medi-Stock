import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = ()=>  {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex ">
        <div className="flex items-center">
        <a className="text-white font-bold" 
        href="\">MediStock Management System</a></div>
        <div className="flex items-right">
        <button type='submit' className="btn btn-primary btn-sm me-2" onClick={logout}>SignOut</button>
      </div>
      </div>

     
    </div>
  );
};

export default Navbar;
