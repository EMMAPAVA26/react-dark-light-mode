
import { Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"


export const  LoginPage = ()  =>{

const[form, setForm] = useState({userName : '', password:''})

const handleChange = (event) => {
   setForm({...form,[event.target.name]: event.target.value})
 
}
 
console.log(form)



return (
    
  <Stack spacing={2} justifyContent={"center"}   sx={{width: "100% "}} alignItems={"center"} >

    <Typography component={"h2"} variant="h2" >Login</Typography>
    

    <TextField id="outlined-basic" label="Usuario" name="userName" variant="outlined" sx={{width: "50% "}}
    onChange={handleChange}   />

    <TextField id="outlined-basic" label="Contraseña" name="password" variant="outlined" sx={{width: "50% "}} onChange={handleChange} />

    <Button variant="contained" sx={{width:"20%" , height: "10%"}}>Enviar</Button>


    






    </Stack>
)
  
}