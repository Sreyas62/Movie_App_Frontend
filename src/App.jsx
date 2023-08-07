import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import Navbar from './components/Homepage/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

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
