import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import CategoryLable from "../components/Categorylable";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      
      <Navbar />
      <Announcement />
      <Slider />
      <CategoryLable/>
      <Categories />
    </>
  );
};

export default HomePage;
