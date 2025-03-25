export default function Home() {
  return (
    <>
      {/* RTL */}
      {/* <a href="javascript:void(0);" id="toggle-rtl" className="tf-btn animate-hover-btn btn-fill">RTL</a> */}
      {/* /RTL  */}
      {/* preload */}
      <div className="preload preload-container">
        <div className="preload-logo">
          <div className="spinner"></div>
        </div>
      </div>
      {/* /preload */}
      <div id="wrapper">
        {/* Top bar */}
        <div className="tf-top-bar bg_white line">
          <div className="px_15 lg-px_40">
            <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
              <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
                <li>
                  <a href="#" className="box-icon w_28 round social-facebook bg_line">
                    <i className="icon fs-12 icon-fb"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_28 round social-twiter bg_line">
                    <i className="icon fs-10 icon-Icon-x"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_28 round social-instagram bg_line">
                    <i className="icon fs-12 icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_28 round social-tiktok bg_line">
                    <i className="icon fs-12 icon-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_28 round social-pinterest bg_line">
                    <i className="icon fs-12 icon-pinterest-1"></i>
                  </a>
                </li>
              </ul>
              <div className="text-center overflow-hidden">
                <div
                  dir="ltr"
                  className="swiper tf-sw-top_bar"
                  data-preview="1"
                  data-space="0"
                  data-loop="true"
                  data-speed="1000"
                  data-delay="2000"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <p className="top-bar-text fw-5">
                        Spring Fashion Sale{" "}
                        <a href="shop-default.html" title="all collection" className="tf-btn btn-line">
                          Shop now<i className="icon icon-arrow1-top-left"></i>
                        </a>
                      </p>
                    </div>
                    <div className="swiper-slide">
                      <p className="top-bar-text fw-5">Summer sale discount off 70%</p>
                    </div>
                    <div className="swiper-slide">
                      <p className="top-bar-text fw-5">Time to refresh your wardrobe.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top-bar-language tf-cur justify-content-end">
                <div className="tf-currencies">
                  <select className="image-select center style-default type-currencies">
                    <option data-thumbnail="images/country/fr.svg">
                      EUR <span>€ | France</span>
                    </option>
                    <option data-thumbnail="images/country/de.svg">
                      EUR <span>€ | Germany</span>
                    </option>
                    <option selected data-thumbnail="images/country/us.svg">
                      USD <span>$ | United States</span>
                    </option>
                    <option data-thumbnail="images/country/vn.svg">
                      VND <span>₫ | Vietnam</span>
                    </option>
                  </select>
                </div>
                <div className="tf-languages">
                  <select className="image-select center style-default type-languages">
                    <option>English</option>
                    <option>العربية</option>
                    <option>简体中文</option>
                    <option>اردو</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Top bar */}
        {/* Header */}
        <header id="header" className="header-default">
          <div className="px_15 lg-px_40">
            <div className="row wrapper-header align-items-center">
              <div className="col-md-4 col-3 tf-lg-hidden">
                <a href="#mobileMenu" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path
                      d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
+                      fill="currentColor"
+                    ></path>
+                  </svg>
+                </a>
+              </div>
+              <div className="col-xl-3 col-md-4 col-6">
+                <a href="index.html" className="logo-header">
+                  <img src="images/logo/logo.svg" alt="logo" className="logo" />
+                </a>
+              </div>
+              <div className="col-xl-6 tf-md-hidden">
+                <nav className="box-navigation text-center">
+                  <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
+                    <li className="menu-item">
+                      <a href="#" className="item-link">
+                        Home<i className="icon icon-arrow-down"></i>
+                      </a>
+                      <div className="sub-menu mega-menu">
+                        <div className="container">
+                          {/* Mega menu Home */}
+                        </div>
+                      </div>
+                    </li>
+                    <li className="menu-item">
+                      <a href="#" className="item-link">
+                        Shop<i className="icon icon-arrow-down"></i>
+                      </a>
+                      <div className="sub-menu mega-menu">
+                        <div className="container">
+                          {/* Mega menu Shop */}
+                        </div>
+                      </div>
+                    </li>
+                    <li className="menu-item">
+                      <a href="#" className="item-link">
+                        Products<i className="icon icon-arrow-down"></i>
+                      </a>
+                      <div className="sub-menu mega-menu">
+                        <div className="container">
+                          {/* Mega menu Products */}
+                        </div>
+                      </div>
+                    </li>
+                    <li className="menu-item position-relative">
+                      <a href="#" className="item-link">
+                        Pages<i className="icon icon-arrow-down"></i>
+                      </a>
+                      <div className="sub-menu submenu-default">
+                        {/* Submenu Pages */}
+                      </div>
+                    </li>
+                    <li className="menu-item position-relative">
+                      <a href="#" className="item-link">
+                        Blog<i className="icon icon-arrow-down"></i>
+                      </a>
+                      <div className="sub-menu submenu-default">
+                        {/* Submenu Blog */}
+                      </div>
+                    </li>
+                    <li className="menu-item">
+                      <a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="item-link">
+                        Buy now
+                      </a>
+                    </li>
+                  </ul>
+                </nav>
+              </div>
+              <div className="col-xl-3 col-md-4 col-3">
+                <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
+                  <li className="nav-search">
+                    <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="nav-icon-item">
+                      <i className="icon icon-search"></i>
+                    </a>
+                  </li>
+                  <li className="nav-account">
+                    <a href="#login" data-bs-toggle="modal" className="nav-icon-item">
+                      <i className="icon icon-account"></i>
+                    </a>
+                  </li>
+                  <li className="nav-wishlist">
+                    <a href="wishlist.html" className="nav-icon-item">
+                      <i className="icon icon-heart"></i>
+                      <span className="count-box">0</span>
+                    </a>
+                  </li>
+                  <li className="nav-cart">
+                    <a href="#shoppingCart" data-bs-toggle="modal" className="nav-icon-item">
+                      <i className="icon icon-bag"></i>
+                      <span className="count-box">0</span>
+                    </a>
+                  </li>
+                </ul>
+              </div>
+            </div>
+          </div>
+        </header>
+        {/* /Header */}
+        {/* Slider */}
+        <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
+          <div
+            dir="ltr"
+            className="swiper tf-sw-slideshow"
+            data-preview="1"
+            data-tablet="1"
+            data-mobile="1"
+            data-centered="false"
+            data-space="0"
+            data-loop="true"
+            data-auto-play="true"
+            data-delay="2000"
+            data-speed="1000"
+          >
+            <div className="swiper-wrapper">
+              <div className="swiper-slide" lazy="true">
+                <div className="wrap-slider">
+                  <img
+                    className="lazyload"
+                    data-src="images/slider/fashion-slideshow-04.jpg"
+                    src="images/slider/fashion-slideshow-04.jpg"
+                    alt="fashion-slideshow-01"
+                  />
+                  <div className="box-content">
+                    <div className="container">
+                      <h1 className="fade-item fade-item-1">
+                        Summer Style<br />
+                        Sensations
+                      </h1>
+                      <p className="fade-item fade-item-2">Discover the hottest trends and must-have looks</p>
+                      <a href="shop-default.html" className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3">
+                        <span>Shop collection</span>
+                        <i className="icon icon-arrow-right"></i>
+                      </a>
+                    </div>
+                  </div>
+                </div>
+              </div>
+              <div className="swiper-slide" lazy="true">
+                <div className="wrap-slider">
+                  <img
+                    className="lazyload"
+                    data-src="images/slider/fashion-slideshow-05.jpg"
+                    src="images/slider/fashion-slideshow-05.jpg"
+                    alt="fashion-slideshow-02"
+                  />
+                  <div className="box-content">
+                    <div className="container">
+                      <h1 className="fade-item fade-item-1">
+                        Youthful<br />
+                        Summer style
+                      </h1>
+                      <p className="fade-item fade-item-2">Discover the hottest trends and must-have looks</p>
+                      <a href="shop-default.html" className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3">
+                        <span>Shop collection</span>
+                        <i className="icon icon-arrow-right"></i>
+                      </a>
+                    </div>
+                  </div>
+                </div>
+              </div>
+              <div className="swiper-slide" lazy="true">
+                <div className="wrap-slider">
+                  <img
+                    className="lazyload"
+                    data-src="images/slider/fashion-slideshow-06.jpg"
+                    src="images/slider/fashion-slideshow-06.jpg"
+                    alt="fashion-slideshow-03"
+                  />
+                  <div className="box-content">
+                    <div className="container">
+                      <h1 className="fade-item fade-item-1">
+                        Gentle<br />
+                        Summer style
+                      </h1>
+                      <p className="fade-item fade-item-2">Discover the hottest trends and must-have looks</p>
+                      <a href="shop-default.html" className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3">
+                        <span>Shop collection</span>
+                        <i className="icon icon-arrow-right"></i>
+                      </a>
+                    </div>
+                  </div>
+                </div>
+              </div>
+            </div>
+          </div>
+          <div className="wrap-pagination sw-absolute-2">
+            <div className="container">
+              <div className="sw-dots sw-pagination-slider"></div>
+            </div>
+          </div>
+        </div>
+        {/* /Slider */}
+        {/* Collection */}
+        <section className="flat-spacing-8">
+          <div className="container-full">
+            <div className="masonry-layout wow fadeInUp">
+              <div className="item-1 collection-item large hover-img">
+                <div className="collection-inner">
+                  <a href="shop-women.html" className="collection-image img-style rounded-0">
+                    <img
+                      className="lazyload"
+                      data-src="images/collections/collection-21.jpg"
+                      src="images/collections/collection-21.jpg"
+                      alt="collection-img"
+                    />
+                  </a>
+                  <div className="collection-content">
+                    <a href="shop-women.html" className="tf-btn collection-title hover-icon">
+                      <span>Women</span>
+                      <i className="icon icon-arrow1-top-left"></i>
+                    </a>
+                  </div>
+                </div>
+              </div>
+              <div className="item-2 collection-item large hover-img">
+                <div className="collection-inner">
+                  <a href="shop-default.html" className="collection-image img-style rounded-0">
+                    <img
+                      className="lazyload"
+                      data-src="images/collections/collection-22.jpg"
+                      src="images/collections/collection-22.jpg"
+                      alt="collection-img"
+                    />
+                  </a>
+                  <div className="collection-content">
+                    <a href="shop-default.html" className="tf-btn collection-title hover-icon">
+                      <span>Handbag</span>
+                      <i className="icon icon-arrow1-top-left"></i>
+                    </a>
+                  </div>
+                </div>
+              </div>
+              <div className="item-3 collection-item large hover-img">
+                <div className="collection-inner">
+                  <a href="shop-default.html" className="collection-image img-style rounded-0">
+                    <img
+                      className="lazyload"
+                      data-src="images/collections/collection-23.jpg"
+                      src="images/collections/collection-23.jpg"
+                      alt="collection-img"
+                    />
+                  </a>
+                  <div className="collection-content">
+                    <a href="shop-default.html" className="tf-btn collection-title hover-icon">
+                      <span>Accessories</span>
+                      <i className="icon icon-arrow1-top-left"></i>
+                    </a>
+                  </div>
+                </div>
+              </div>
+              <div className="item-4 collection-item large hover-img">
+                <div className="collection-inner">
+                  <a href="shop-men.html" className="collection-image img-style rounded-0">
+                    <img
+                      className="lazyload"
+                      data-src="images/collections/collection-24.jpg"
+                      src="images/collections/collection-24.jpg"
+                      alt="collection-img"
+                    />
+                  </a>
+                  <div className="collection-content">
+                    <a href="shop-men.html" className="tf-btn collection-title hover-icon">
+                      <span>Men</span>
+                      <i className="icon icon-arrow1-top-left"></i>
+                    </a>
+                  </div>
+                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Collection */}
        {/* Shop Collection */}
        <section className="flat-spacing-4 pt_0">
          <div className="container">
            <div className="tf-grid-layout md-col-2 tf-img-with-text">
              <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
                <img
                  className="lazyload"
                  data-src="images/collections/collection-25.jpg"
                  src="images/collections/collection-25.jpg"
                  alt="collection-img"
                />
              </div>
              <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
                <span className="sub-heading text-uppercase fw-7">SPRING SALE 30% OFF</span>
                <div className="heading">
                  Effortless <br /> Denim Delights
                </div>
                <p className="description">Discover the versatility of denim with our collection of jeans, jackets</p>
                <a href="shop-collection-list.html" className="tf-btn style-2 btn-fill radius-3 animate-hover-btn">
                  Shop collection
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Shop Collection */}
        {/* Best seller */}
        <section className="flat-spacing-2 pt_0">
          <div className="container">
            <div className="flat-title flex-row justify-content-between px-0">
              <span className="title wow fadeInUp" data-wow-delay="0s">
                Best Seller
              </span>
              <div className="box-sw-navigation">
                <div className="nav-sw square nav-next-slider nav-next-product">
                  <span className="icon icon-arrow1-left"></span>
                </div>
                <div className="nav-sw square nav-prev-slider nav-prev-product">
                  <span className="icon icon-arrow1-right"></span>
                </div>
              </div>
            </div>
            {/* Best seller carousel */}
          </div>
        </section>
        {/* /Best seller */}
        {/* Banner Collection */}
        <section className="flat-spacing-3 pt_0 line">
          <div className="container-full">
            <div className="wrap-carousel">
              {/* Banner collection carousel */}
            </div>
          </div>
        </section>
        {/* /Banner Collection */}
        {/* Store */}
        <section className="flat-spacing-9 pb_0">
          <div className="container">
            <div className="flat-title wow fadeInUp" data-wow-delay="0s">
              <span className="title">Visit our store</span>
            </div>
            {/* Store tabs */}
          </div>
        </section>
        {/* /Store */}
        {/* Brand */}
        <section className="flat-spacing-1 wow fadeIn" data-wow-delay="0s">
          <div className="container">
            <div className="row-brand">
              {/* Brand carousel */}
            </div>
          </div>
        </section>
        {/* /Brand */}
        {/* Footer */}
        <footer id="footer" className="footer md-pb-70">
          {/* Footer content */}
        </footer>
        {/* /Footer */}
      </div>

      {/* gotop */}
      <div className="progress-wrap">
        {/* gotop content */}
      </div>
      {/* /gotop */}

      {/* toolbar-bottom */}
      <div className="tf-toolbar-bottom type-1150">
        {/* toolbar-bottom content */}
      </div>
      {/* /toolbar-bottom */}

      {/* modalDemo */}
      <div className="modal fade modalDemo" id="modalDemo">
        {/* modalDemo content */}
      </div>
      {/* /modalDemo */}

      {/* mobile menu */}
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        {/* mobile menu content */}
      </div>
      {/* /mobile menu */}

      {/* canvasSearch */}
      <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
        {/* canvasSearch content */}
      </div>
      {/* /canvasSearch */}

      {/* toolbarShopmb */}
      <div className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile" id="toolbarShopmb">
        {/* toolbarShopmb content */}
      </div>
      {/* /toolbarShopmb */}

      {/* modal login */}
      <div className="modal modalCentered fade form-sign-in modal-part-content" id="login">
        {/* modal login content */}
      </div>
      <div className="modal modalCentered fade form-sign-in modal-part-content" id="forgotPassword">
        {/* modal forgotPassword content */}
      </div>
      <div className="modal modalCentered fade form-sign-in modal-part-content" id="register">
        {/* modal register content */}
      </div>
      {/* /modal login */}

      {/* shoppingCart */}
      <div className="modal fullRight fade modal-shopping-cart" id="shoppingCart">
        {/* shoppingCart content */}
      </div>
      {/* /shoppingCart */}

      {/* modal compare */}
      <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
        {/* modal compare content */}
      </div>
      {/* /modal compare */}

      {/* modal quick_add */}
      <div className="modal fade modalDemo" id="quick_add">
        {/* modal quick_add content */}
      </div>
      {/* /modal quick_add */}

      {/* modal quick_view */}
      <div className="modal fade modalDemo" id="quick_view">
        {/* modal quick_view content */}
      </div>
      {/* /modal quick_view */}

      {/* modal find_size */}
      <div className="modal fade modalDemo tf-product-modal" id="find_size">
        {/* modal find_size content */}
      </div>
      {/* /modal find_size */}
    </>
  );
}
