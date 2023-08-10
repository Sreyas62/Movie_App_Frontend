import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import Navbar from './components/Homepage/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { LOGIN_USER_SUCCESS } from './Redux/users/user.types'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Dispatch the token to the Redux store
      dispatch({ type: LOGIN_USER_SUCCESS, payload: storedToken });
    }
  }, []);

  return (
    <>
      <div className="App">
      <Navbar></Navbar>
        <AllRoutes />
        </div>
    </>
  )
}

export default App
