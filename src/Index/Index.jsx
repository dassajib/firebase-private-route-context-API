import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import OrderCart from "../Component/OrderCart/OrderCart";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Login from "../Component/Login/Login";
import Registration from "../Component/Registration/Registration";
import AppBar from "../Component/AppBar/AppBar";
import AuthProvider from "../Context/AuthProvider";


const Index = () => {
  return (
    // wrapped app by contextAPI
    <AuthProvider>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order-cart" element={<OrderCart />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Index;
