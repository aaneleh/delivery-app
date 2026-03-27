import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import './app.css';
import { CartProvider } from './contexts/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
