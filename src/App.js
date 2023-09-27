import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import AddToCart from "./components/AddToCart";
import Header from "./components/Header";
import Category from "./components/Category";
// import Navbar from "./components/Navbar";
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
          <Route path="/Category" element={<Category />} />
        </Routes>
        {/* <Footer /> */}
      </Router>


      {/* <Home /> */}

      {/* <Products /> */}

    </div>
  );
}

export default App;
