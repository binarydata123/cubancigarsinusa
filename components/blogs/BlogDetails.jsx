import React from "react";
import Image from "next/image";
export default function BlogDetails({ blog }) {
  return (
    <>
      <div className="blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-detail-main">
                <div className="blog-detail-main-heading">
                  <ul className="tags-lists justify-content-center">
                  <li>
                  <a href="#" className="tags-item">
                    CIGAR ACCESSORIES
                  </a>
                </li>
                <li>
                  <a href="#" className="tags-item">
                    PREMIUM CIGARS
                  </a>
                </li>
              

                  </ul>
                  <div className="title">{blog.title}</div>
                  <div className="meta">
                    by <span>admin</span> on <span>Oct 02</span>
                  </div>
                  <div className="image">
                    <Image
                      className="lazyload"
                      data-src="/images/blog/blog-detail.jpg"
                      alt="image"
                      src="/images/blog/bannerOne.jpg"
                      width={1100}
                      height={707}
                    />
                  </div>
                </div>
                <blockquote>
                  <div className="icon">
                    <Image
                      alt="image"
                      src="/images/item/quote.svg"
                      width={37}
                      height={25}
                    />
                  </div>
                  <div className="text">
                  A cigar is more than just a smoke – it’s an experience. Crafted with care, each cigar tells a story through its tobacco, blend, and craftsmanship. From the selection of premium leaves to the art of rolling and aging, every step is designed to create a smooth and rich experience for the smoker. Whether you're enjoying a mild cigar with friends or savoring a bold, full-bodied one on your own, cigars offer a moment of relaxation, tradition, and sophistication. <br />
                  <br />
                  The world of cigars is as diverse as the people who enjoy them, with countless varieties, flavors, and brands to explore. From the rich, earthy flavors of Cuban cigars to the spicy notes of Dominican blends, there is a cigar for every taste. For connoisseurs and casual smokers alike, the enjoyment of a good cigar goes beyond the smoke – it’s about savoring the ritual, appreciating the artistry, and celebrating the moment.
                </div>

                </blockquote>
                <div className="grid-image">
                  <div>
                    <Image
                      className="lazyload"
                      data-src="/images/blog/blog-detail-1.jpg"
                      alt="image"
                      src="/images/blog/bannerTwo.jpg"
                      width={705}
                      height={538}
                    />
                  </div>
                  <div>
                    <Image
                      className="lazyload"
                      data-src="/images/blog/blog-detail-2.jpg"
                      alt="image"
                      src="/images/blog/bannerThree.jpg"
                      width={705}
                      height={538}
                    />
                  </div>
                </div>
                <div className="desc">
                    Cigar smoking is a social activity, enjoyed by many aficionados around the world. From the rich aroma of the tobacco to the smooth texture of the smoke, cigars offer a refined experience unlike any other. Whether you're a seasoned smoker or a curious beginner, the world of cigars is vast and full of variety. <br />
                    <br />
                    <br />
                    Many people enjoy cigars as part of a celebratory moment, such as after a special achievement or during important events. The experience is often accompanied by a sense of tradition, as cigars have been a symbol of relaxation and luxury for centuries. <br />
                    <br />
                    <br />
                    Cigar aficionados are known for their passion for the craft, appreciating the intricate details of cigar making. The quality of tobacco, the rolling process, and the aging of the cigars all contribute to the final product. Each cigar tells a unique story, and exploring these stories is part of the joy for many enthusiasts. <br />
                    <br />
                    <br />
                    Just like wine, cigars have their own unique flavors, ranging from earthy and woody notes to rich, sweet, and spicy undertones. Pairing cigars with different drinks, such as whiskey, rum, or coffee, can elevate the experience and add depth to the flavors. Whether you're enjoying a cigar on a quiet evening or sharing one with friends, the experience is always about savoring the moment. <br />
                    <br />
                    <br />
                    The cigar industry continues to evolve, with new blends and styles emerging regularly. Whether you're into traditional Cuban cigars or exploring the variety of offerings from different regions, the world of cigars offers endless possibilities for exploration and enjoyment. <br />
                    <br />
                    <br />
                    For the true cigar enthusiast, the journey never ends—there's always a new flavor to try, a new brand to discover, and a new story to experience. Enjoy the journey, and remember, the best cigar is the one that brings you the most satisfaction.
                  </div>

                <div className="bot d-flex justify-content-between flex-wrap align-items-center">
                  <ul className="tags-lists">
                    <li>
                      <a href="#" className="tags-item">
                        <span>Accessories</span>
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center gap-20">
                    <p>Share:</p>
                    <ul className="tf-social-icon d-flex style-default">
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-facebook border-line-black"
                        >
                          <i className="icon fs-14 icon-fb" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-twiter border-line-black"
                        >
                          <i className="icon fs-12 icon-Icon-x" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-instagram border-line-black"
                        >
                          <i className="icon fs-14 icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-tiktok border-line-black"
                        >
                          <i className="icon fs-14 icon-tiktok" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-pinterest border-line-black"
                        >
                          <i className="icon fs-14 icon-pinterest-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tf-article-navigation">
                  <div className="item position-relative d-flex w-100 prev">
                    <a href="#" className="icon">
                      <i className="icon-arrow-left" />
                    </a>
                    <div className="inner">
                      <a href="#">PREVIOUS</a>
                      <h6>
                        <a href="#">
                        Discover the art of cigar rolling and craftsmanship
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="item position-relative d-flex w-100 justify-content-end next">
                    <div className="inner text-end">
                      <a href="#">NEXT</a>
                      <h6>
                        <a href="#">
                        Exploring the world of rare and limited edition cigars
                        </a>
                      </h6>
                    </div>
                    <a href="#" className="icon">
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-sidebar-mobile d-flex">
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarmobile"
          aria-controls="offcanvasRight"
        >
          <i className="icon-open" />
        </button>
      </div>
    </>
  );
}
