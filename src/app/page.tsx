import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="tf-wrapper">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedCategories />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
