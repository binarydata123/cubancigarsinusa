import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="tf-slideshow about-us-page position-relative">
      <div className="banner-wrapper">
        <Image
          className="lazyload"
          src="/images/slider/bannerOne.jpg"
          data-=""
          alt="image-collection"
          width={2000}
          height={1262}
        />
        <div className="box-content text-center">
          <div className="container">
            <div className="text text-white">
            Discover the art of cigar indulgence <br className="d-xl-block d-none" />
            Elevate your lifestyle with every puff
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
