import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/homepage/UserList";
import Navbar from "./components/navbar/Navbar";
import TopCategories from "./components/homepage/TopCategories";
import ShopByCategory from "./components/homepage/ShopByCategory";
import FeaturedItems from "./components/homepage/FeaturedItems";
import ProductDetails from "./components/homepage/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FeaturedItems />} />
          <Route path="/single-product/:id" element={<ProductDetails />} />
          <Route path="/category-list" element={<TopCategories />} />
          <Route
            path="/shop-by-category/:id"
            element={<ShopByCategory />}
          />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
