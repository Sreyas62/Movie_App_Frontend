import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"
import MoviesPage from "../pages/MoviesPage"
import SignupPage from "../pages/SignupPage"

export default function PrivateRoute({ children}) {
    const {auth} = useSelector((state)=>state.userReducer)

    if (auth) {
        return <MoviesPage/>
    }

    if(children == <SignupPage/>){
        return <SignupPage/>
    }

    return <LoginPage/>

}