import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="flat-spacing-23 flat-image-text-section">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-image-wrap">
              <Image
                className="lazyload w-100"
                data-src="/images/collections/aboutUsTwo.jpg"
                alt="collection-img"
                src="/images/collections/aboutUsTwo.jpg"
                width={600}
                height={450}
              />
            </div>
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
              <div>
                <div className="heading">Established - 1995</div>
                <div className="text">
                  LuxCigars was founded in 1995 by John Davenport, a connoisseur
                  of premium cigars with a deep appreciation for the art of
                  cigar making. <br className="d-xl-block d-none" />
                  John envisioned a brand that celebrates tradition,
                  craftsmanship, and <br className="d-xl-block d-none" />
                  sophistication. The journey began in a small town where our
                  cigars <br className="d-xl-block d-none" />
                  quickly gained a reputation for quality, becoming a favorite
                  among <br className="d-xl-block d-none" />
                  discerning cigar aficionados.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-spacing-15">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
              <div>
                <div className="heading">Our Mission</div>
                <div className="text">
                  Our mission is to provide the finest hand-rolled cigars, crafted 
                  with passion and precision. <br className="d-xl-block d-none" />
                  We believe in delivering an exceptional smoking experience, 
                  while <br className="d-xl-block d-none" />
                  honoring the heritage and art of cigar making. At LuxCigars, 
                  we <br className="d-xl-block d-none" />
                  are committed to quality, luxury, and sustainability in every 
                  leaf <br className="d-xl-block d-none" />
                  we use and every cigar we roll.
                </div>
              </div>
            </div>
            <div className="grid-img-group">
              <div className="tf-image-wrap box-img item-1">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    src="/images/collections/aboutusThree.jpg"
                    data-=""
                    alt="img-slider"
                    width={337}
                    height={388}
                  />
                </div>
              </div>
              <div className="tf-image-wrap box-img item-2">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    src="/images/collections/aboutUsFour.jpg"
                    data-=""
                    alt="img-slider"
                    width={400}
                    height={438}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
