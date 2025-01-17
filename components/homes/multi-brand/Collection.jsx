import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <section className="flat-spacing-19">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-1">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s"   style={{
          border: '1px solid rgb(204, 204, 204)',
          padding: '15px',
          boxSizing: 'border-box',
        }}>
            <Image
              className="lazyload"
              data-src="/images/collections/collection-58.jpg"
              alt="collection-img"
              src="/images/collections/str1.jpg"
              width={800}
              height={760}
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="heading">
            Elevating the Art of Cigar <br />
            Appreciation
            </div>
            <p className="description">
            Discover a premium selection crafted for sophistication and taste.
            Experience the perfect balance of tradition and innovation.
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill rounded-full animate-hover-btn"
            >
              Read our stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
