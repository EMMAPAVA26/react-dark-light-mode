import { AppRoutes } from "./routes/AppRoutes"
import React from "react"
import { Menu } from "./components/Menu"
import './styles/darkMode.css';
import {AuthProvider} from './context/AuthContext'


export const App = () => {
    
    return(
        <>
        <AuthProvider >
        <Menu/>
        <AppRoutes /> 
        </AuthProvider>
        </>
    )
}