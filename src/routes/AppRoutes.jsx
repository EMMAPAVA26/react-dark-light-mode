import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Profiles } from "../pages/Profiles"

export const AppRoutes = () => {
    return (

        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profiles />} />
        </Routes>

    )
}