"use client";
import React from 'react';

const TopBar = () => {
  return (
    <div className="tf-top-bar bg_white line">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
            <li><a href="#" className="box-icon w_28 round social-facebook bg_line"><i className="icon fs-12 icon-fb"></i></a></li>
            <li><a href="#" className="box-icon w_28 round social-twiter bg_line"><i className="icon fs-10 icon-Icon-x"></i></a></li>
            <li><a href="#" className="box-icon w_28 round social-instagram bg_line"><i className="icon fs-12 icon-instagram"></i></a></li>
            <li><a href="#" className="box-icon w_28 round social-tiktok bg_line"><i className="icon fs-12 icon-tiktok"></i></a></li>
            <li><a href="#" className="box-icon w_28 round social-pinterest bg_line"><i className="icon fs-12 icon-pinterest-1"></i></a></li>
          </ul>
          <div className="text-center overflow-hidden">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5">Spring Fashion Sale <a href="/shop" title="all collection" className="tf-btn btn-line">Shop now<i className="icon icon-arrow1-top-left"></i></a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="top-bar-language tf-cur justify-content-end">
            <div className="tf-currencies">
              <select className="image-select center style-default type-currencies">
                <option value="USD">USD $ | United States</option>
                <option value="EUR">EUR € | France</option>
                <option value="EUR">EUR € | Germany</option>
                <option value="VND">VND ₫ | Vietnam</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
