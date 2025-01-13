import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import ShopDefault from "@/components/shop/ShopDefault";
import React from "react";

export const metadata = {
  title: "New Arrivals | Premium Cigars Collection",
  description:
    "Explore the latest arrivals in our premium cigar collection. Find the finest cigars and accessories to elevate your smoking experience.",
};

export default function page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrivals</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Discover our latest selection of premium cigars and accessories.
            Whether you're a seasoned enthusiast or a newcomer, find the perfect cigar for every occasion.
          </p>
        </div>
      </div>
      <ShopDefault />
      <Footer1 />
    </>
  );
}
