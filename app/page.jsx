import Features from "@/components/common/Features";
import ShopGram from "@/components/common/ShopGram";
// import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Brands from "@/components/homes/home-1/Brands";

// import Categories from "@/components/homes/home-1/Categories";

// import Hero from "@/components/homes/home-1/Hero";
import Lookbook from "@/components/homes/home-1/Lookbook";
import Marquee from "@/components/homes/home-1/Marquee";
import Products from "@/components/homes/home-1/Products";
import Hero  from "@/components/homes/multi-brand/Hero";
// import Categories2  from "@/components/homes/multi-brand/Hero";
import Categories2 from "@/components/homes/multi-brand/Categories2";
import Testimonials from "@/components/homes/multi-brand/Testimonials";
import Collection from "@/components/homes/multi-brand/Collection"
import Categories  from "@/components/homes/multi-brand/Categories"

export const metadata = {
  title: "Premium Cigars for Sale | Explore Luxury and Quality Cigars",
  description: "Discover premium cigars at unbeatable prices. Shop luxury cigars, hand-rolled classics, and exclusive cigar brands for the ultimate smoking experience.",
};

export default function Home() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Categories/>
      <Hero />
      <Marquee />
      {/* // <Categories /> */}
      <Categories2 />
      <Products />
      <Collection />

      <Testimonials />

      {/* <Lookbook /> */}
      {/* <Testimonials /> */}
      {/* <ShopGram /> */}
      <Features />
      <Brands />

      <Footer1 />
    </>
  );
}
