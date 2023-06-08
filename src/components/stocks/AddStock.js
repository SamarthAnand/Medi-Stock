import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStock = () => {

    const [stock,setStock] = useState({
        productName:"",
        productID:"",
        Stock:"",
        Batch:"",
        companyName:"",
        price:"",
        ExpiryDate:"",
    });

    const navigate =useNavigate(); 

    const reset = (e) => {
        e.preventDefault();
        setStock({
            productName:"",
            productID:"",
            Stock:"",
            Batch:"",
            companyName:"",
            price:"",
            ExpiryDate:"",
        });
    }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Stock</h1>
            </div>
            <div>
                <form name='myForm' method='post' onsubmit="return validateForm()">
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Medicine Name
                        </label>
                        <input type="text" name='medname' className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>
            
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Medicine ID
                        </label>
                        <input type="number" className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Batch
                        </label>
                        <input type="text" className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Company Name
                        </label>
                        <input type="text" className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Price
                        </label>
                        <input type="text" className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Stock
                        </label>
                        <input type="number" className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-600 text-sm font-normal">
                            Expiry Date
                        </label>
                        <input type="date" className="h-10 w-96 border mt-2 px-2 py-2" required></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <input type="submit" value="Submit" className="rounded text-white font-semibold bg-blue-500 py-2 px-6 hover:bg-green-700"></input>
                        <button className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700"
                        onClick={reset}
                        >Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default AddStock;