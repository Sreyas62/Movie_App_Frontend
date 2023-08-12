import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import MoviesPage from "../pages/MoviesPage";
import PrivateRoute from "./PrivateRoute";
export default function AllRoutes() {

    return <Routes>
        <Route path="/" element={<PrivateRoute><Homepage/></PrivateRoute>}></Route>
        <Route path="/register" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/movies" element={<PrivateRoute><MoviesPage/></PrivateRoute>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
}