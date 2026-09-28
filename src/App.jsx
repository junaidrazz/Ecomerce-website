import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"
import Checkout from "./Pages/Checkout"
import Navbar from "./components/Navbar"
import AuthProvider from "./context/AuthContext"
import ProductDetails from "./Pages/ProductDetails"
import CartProvider from "./context/CartContext"
import './App.css'

function App() {
  return (
    
    <AuthProvider>
      <CartProvider>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
    </CartProvider>
    </AuthProvider>
    
  )
}

export default App

