import axios from "axios";
import AuthUser, { http } from "./AuthUser";
const API_URL = "http://localhost:8201/users/";

export const logout = ()=>  {
    localStorage.removeItem("user");
  }


   export const login = (username, password)=> {
        return axios
          .post(API_URL + "token", { username, password })
          .then((response) => {
            if (response.data.accessToken) {
           localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
