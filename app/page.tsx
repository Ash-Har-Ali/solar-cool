"use client";

import React, { useEffect, useState } from "react";
import BannerCarousel from "./components/BannerCarousel";
import PopularProducts from "./components/PopularProducts";
import Showcase from "./components/Showcase";
import ProductCategories from "./components/ProductCategories";
import BlogsSection from "./components/BlogsShowcase";
import FAQSession from "./components/FAQ";

const HomePage: React.FC = () => {
  return (
    <div>
      <BannerCarousel />
      <PopularProducts />
      <Showcase />
      <ProductCategories />
      <div className="w-full h-96 bg-gradient-to-r from-solarcoolgreen to-[#0C8749] flex justify-center items-center mb-12">
      </div>
      <BlogsSection />
      <FAQSession />
    </div>
  );
};

export default HomePage;
