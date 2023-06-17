import AuthUser, { http } from "./AuthUser";

   export  const signUp=(user)=>{
    
        return http.post('/users/register').then((res) => res.data);
    }

   
