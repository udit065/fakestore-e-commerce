import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
        <Footer />
      </Router>


      {/* <Home /> */}

      {/* <Products /> */}

    </div>
  );
}

export default App;
