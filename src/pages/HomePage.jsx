import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import CategoryLable from "../components/Categorylable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      
      <Navbar />
      <Announcement />
      <Slider />
      <CategoryLable/>
      <Categories />
      <Products/>
      <Footer/>
    </>
  );
};

export default HomePage;
