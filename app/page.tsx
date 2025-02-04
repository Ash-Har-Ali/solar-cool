"use client";

import React, { useEffect, useState } from "react";
import BannerCarousel from "./components/BannerCarousel";
import PopularProducts from "./components/ProductsGrid";
import Showcase from "./components/Showcase";
import ProductCategories from "./components/ProductCategories";

const HomePage: React.FC = () => {
  return (
    <div>
      <BannerCarousel />
      <PopularProducts />
      <Showcase />
      <ProductCategories />
      
    </div>
  );
};

export default HomePage;
