"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className="tf-slider slider-home2">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-item">
              <div className="tf-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-inner style-2">
                      <div className="slider-content">
                        <h1 className="heading">Spring Collection 2025</h1>
                        <p className="sub-heading">
                          Discover the latest trends in fashion with our exclusive spring collection.
                          Elevate your style with premium quality clothing and accessories.
                        </p>
                        <div className="slider-btns">
                          <Link href="/shop" className="tf-btn btn-1">
                            Shop Now
                          </Link>
                          <Link href="/collections" className="tf-btn btn-2">
                            Explore Collections
                          </Link>
                        </div>
                      </div>
                      <div className="slider-img">
                        <Image 
                          src="/images/slider/slider-2.jpg" 
                          alt="Spring Collection" 
                          width={600} 
                          height={700}
                          className="img-slider"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
