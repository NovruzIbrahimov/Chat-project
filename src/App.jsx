import './App.css'
import { Route, Routes } from "react-router-dom";
import WelcomePage from './pages/Welcome/WelcomePage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'

function App() {
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/home" element={<Home />} />
    </Routes>
     
    </>
  )
}

export default App
