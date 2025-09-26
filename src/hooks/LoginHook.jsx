import axios from "axios"



export const LoginHook = async() => {

    
try{
 const response = await axios.put('http://localhost:3001/users', {
    params:{username,password},
 })
 if(response.data.length > 0 ){
   return response.data[0]
 }else{
   throw new Error('contraseña incorrecta ');
 }
}catch(error){
   console.error(error.message);
   throw error;
}
}