import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"
import MoviesPage from "../pages/MoviesPage"

export default function PrivateRoute({ children}) {
    const {auth} = useSelector((state)=>state.userReducer)

    if (auth) {
        return <MoviesPage/>
    }

    return <LoginPage/>

}