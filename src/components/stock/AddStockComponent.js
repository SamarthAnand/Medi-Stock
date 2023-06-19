import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
// import StockService from '../../services/StockService';
import axios from "axios";
import "./AddStockComponent.css"

const AddStockComponent = () => {
    const STOCK_API_BASE_URL = 'http://localhost:8080/api/';

    // const config = {
    //     STOCK_API_BASE_URL,
    //     headers: {
    //      'Access-Control-Allow-Origin' : '*',
    //      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //      }
    //  }

    const [product_Name, setProduct_Name] = useState('')
    const [description, setDescription] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [amount, setAmount] = useState('')
    const [cName, setCName] = useState('')
    const [batch, setBatch] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStock = (e) => {
        e.preventDefault();
        const stock = {product_Name, description, cName, amount, batch, expiryDate, price}
        if(id){
            axios.put(STOCK_API_BASE_URL + "stock/" + id).then((response) => {
                console.log(response.data)
                navigate('/liststockcomponent')
            }).catch(error => {
                console.log(error)
            })
        }else{
            axios.post(STOCK_API_BASE_URL+"stock").then((response) =>{
                console.log(response.data)
                navigate('/liststockcomponent');
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        axios.get(STOCK_API_BASE_URL + "stock/"+id).then((response) =>{
            setProduct_Name(response.data.product_Name)
            setCName(response.data.cName)
            setBatch(response.data.batch)
            setDescription(response.data.description)
            setAmount(response.data.amount)
            setExpiryDate(response.data.expiryDate)
            setPrice(response.data.price)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Stock</h2>
        }else{
            return <h2 className = "text-center">Add Purchase</h2>
        }
    }

    return (
        <div class="main_body">
           <br /><br />
                <div class = "form-style-2">
                    <div class = "form-style-2-heading">
                       {
                           title()
                       }
                        <div class= "form_body_start">
                            <form action='' method='post'>
                                <div>
                                    <label for="field1"><span>Product Name <span class="required">*</span></span></label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter product name"
                                        name = "field1"
                                        class = "input-field"
                                        value = {product_Name}
                                        onChange = {(e) => setProduct_Name(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div>
                                    <label for="field2"><span>Description </span></label>
                                    <textarea
                                        placeholder = "Enter description"
                                        name = "field2"
                                        class = "textarea-field"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                                <div>
                                    <label for="field3"><span> Company Name <span class="required">*</span></span></label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter company name"
                                        name = "field3"
                                        class  = "input-field"
                                        value = {cName}
                                        onChange = {(e) => setCName(e.target.value)}
                                    >
                                    </input>
                                    </div>
                                    <div>
                                    <label class = "field4"><span>Stock <span class="required">*</span></span></label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter the amount"
                                        name = "field4"
                                        class  = "input-field"
                                        value = {amount}
                                        onChange = {(e) => setAmount(e.target.value)}
                                    >
                                    </input>
                                    </div>
                                    <div>
                                    <label class = "field5"><span> Batch<span class="required">*</span></span></label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter batch Id"
                                        name = "field5"
                                        class  = "input-field"
                                        value = {batch}
                                        onChange = {(e) => setBatch(e.target.value)}
                                    >
                                    </input>
                                    </div>
                                    <div>
                                    <label class = "field6"><span>Expiry Date <span class="required">*</span></span></label>
                                    <input
                                        type = "date"
                                        placeholder = "DD/MM/YY"
                                        name = "field6"
                                        class  = "input-field"
                                        value = {expiryDate}
                                        onChange = {(e) => setExpiryDate(e.target.value)}
                                    >
                                    </input>
                                    </div>
                                    <div>
                                    <label class = "field7"><span> Price <span class="required">*</span></span></label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter price"
                                        name = "field7"
                                        class  = "input-field"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button class  = "btn" type='submit' onSubmit={(e) => saveOrUpdateStock(e)} >Submit </button>
                                <Link to="/liststockcomponent" class ="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AddStockComponent
