import { useState, useEffect } from 'react';
import Header from './Components/Header.jsx';
import Product from './Components/Product.jsx';
import Footer from './Components/Footer.jsx';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route  path="/product" element={<Product products={products} />}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/cart" element={<Cart/>}></Route>

      </Routes>
      </BrowserRouter>
      
      <Product products={products} />
      <Footer />
    </div>
  )
}

export default App