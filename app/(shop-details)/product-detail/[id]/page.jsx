import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";

import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import Link from "next/link";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
export const metadata = {
  title: "Cigar Shop Details | Premium Cigars Collection",
  description:
    "Explore the details of our premium cigars. Find out more about the flavors, sizes, and origins of your favorite cigars in our detailed product listings.",
};
import { allProducts } from "@/data/products";
import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(), // Ensure IDs are strings
  }));
}
export default function page({ params }) {
  const product =
    allProducts.filter((elm) => elm.id == params.id)[0] || allProducts[0];
  return (
    <>
      <Header2 />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right" />

              <span className="text">
                {product.title ? product.title : "Cotton jersey top"}
              </span>
            </div>
            <ProductSinglePrevNext currentId={product.id} />
          </div>
        </div>
      </div>
      <DetailsOuterZoom product={product} />
      <ShopDetailsTab />
      <Products />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
