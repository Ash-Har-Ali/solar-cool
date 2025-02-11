"use client";

import React, { useEffect, useState } from "react";
import BannerCarousel from "./components/BannerCarousel";
import PopularProducts from "./components/PopularProducts";
import Showcase from "./components/Showcase";
import ProductCategories from "./components/ProductCategories";
import Testimonials from "./components/Testimonials";
import BlogsSection from "./components/BlogsShowcase";
import FAQSession from "./components/FAQ";


const HomePage: React.FC = () => {
  return (
    <div>
      <BannerCarousel />
      <PopularProducts />
      <Showcase />
      <ProductCategories />
      <Testimonials />
      <BlogsSection />
      <FAQSession />
    </div>
  );
};

export default HomePage;
