import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import FilterProducts from './components/FilterProducts';
import AddToCart from "./components/AddToCart";
import Header from "./components/Header";
import Offers from './components/component/Offers';
import LatestProducts from './components/component/LatestProducts';
import ProductsSection from './components/component/ProductsSection';
// import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/products" element={<ProductsSection />} />
          <Route path="/products/:name" element={<FilterProducts />} />
          <Route path="/latest-products" element={<LatestProducts />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
        {/* <Footer /> */}
      </Router>


      {/* <Home /> */}

      {/* <Products /> */}

    </div>
  );
}

export default App;
