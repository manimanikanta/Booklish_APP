import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Error from './Pages/Error';
import DisplayProducts from './Pages/DisplayProducts';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from "./Components/Footer.jsx";
import banner from './assets/Images/banner.jpg';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route index element={<Home />} />
        <Route path="/products" element={<DisplayProducts banner={banner} />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
