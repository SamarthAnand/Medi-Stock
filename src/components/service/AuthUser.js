import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BASE_URL = 'http://localhost:8201';
//function AuthUser(){
//    const navigate = useNavigate();
//    const [token,setToken] = useState(getToken());
//    const [user,setUser] = useState(getUser());

//     const getToken = () =>{
//         const tokenString = sessionStorage.getItem('token');
//         const userToken = JSON.parse(tokenString);
//         return userToken;
//     }

//     const getUser = () =>{
//         const userString = sessionStorage.getItem('user');
//         const user_detail = JSON.parse(userString);
//         return user_detail;
//     }



    
//     const saveToken = (user,token) =>{
//         sessionStorage.setItem('token',JSON.stringify(token));
//         sessionStorage.setItem('user',JSON.stringify(user));

//         setToken(token);
//         setUser(user);
//         navigate('/');
//     }

//     const logout = () => {
//         sessionStorage.clear();
//        navigate('/login');
//     }

   export const http = axios.create({
        baseURL:BASE_URL,
        headers:{
            "Content-type" : "application/json",
          //  "Authorization" : `Bearer ${token}`
        }
    });
    // return {
    //     setToken:saveToken,
    //     token,
    //     user,
    //     getToken,
    //     http,
    //     logout
    // }
//      };