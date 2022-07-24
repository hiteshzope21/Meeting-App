import { Config } from "../config.js";

const addUser=async (user)=>{
   const response= await fetch(`${Config.baseURL}/api/auth/register`,{
       method:'post',
       body:JSON.stringify(user),
       headers:{
           'Content-Type':'application/json'
       }
   });
   if(!response.ok){
       const responseText=await response.text();
       throw new Error(responseText || 'something is wrong')
   }
}
export {addUser}