import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import StockService from '../../services/StockService'
import axios from "axios";
import "./ListStockComponent.css"

const ListStockComponent = () => {

    const [stocks, setStocks] = useState([])

    const STOCK_API_BASE_URL = 'http://localhost:8080/api';

  

    useEffect(() => {
        getAllStocks();
    }, [])

    const getAllStocks = () => {
        axios.get(STOCK_API_BASE_URL+"/stocks").then((response) => {
            setStocks(response.data)
            console.log(stocks);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStock = (id) => {
        axios.delete(STOCK_API_BASE_URL + "/stock/" + id).then((response) =>{
        getAllStocks();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        
        <div class = "container">
            <h2 class = "heading"> List Stocks </h2>
            <Link to = "/add-stock" class = "AddStock" > Add Stock </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6"> Stock Id </td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6"> Product Name </td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Description</td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Company Name</td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6"> Stock</td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Batch</td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Expiry Date</td>
                    <td className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Price</td>

                    <td> Actions </td>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        stocks.map(
                            stock =>
                            <tr key = {stock.id}> 
                                <td><span>ID     : </span>{stock.id} </td>
                                <td><span>Product Name :  </span>{stock.product_Name} </td>
                                <td>{stock.description}</td>
                                <td><span>Company Name :  </span>{stock.cname}</td>
                                <td><span>amount :  </span>{stock.amount}</td>
                                <td><span>Batch Code :  </span>{stock.batch}</td>
                                <td><span>Expiry Date :  </span>{stock.expiryDate}</td>
                                <td><span>Price :  </span>{stock.price}</td>
                                <td>
                                    {/* <Link className="rounded bg-slate-600 text-white px-6 py-2" to={`/editStock/${stock.id}`} >Update</Link> */}
                                    <button className="rounded bg-slate-600 text-white px-6 py-2" onClick = {() => deleteStock(stock.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStockComponent
