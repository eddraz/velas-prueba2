import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="tf-top-bar bg_white line">
        <div className="px_15 lg-px_40">
          <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
            <ul className="tf-top-bar_item tf-social-icon flex gap-10">
              <li><a href="#" className="box-icon w_28 round social-facebook bg_line"><i className="icon fs-12 icon-fb"></i></a></li>
              <li><a href="#" className="box-icon w_28 round social-twiter bg_line"><i className="icon fs-10 icon-Icon-x"></i></a></li>
              <li><a href="#" className="box-icon w_28 round social-instagram bg_line"><i className="icon fs-12 icon-instagram"></i></a></li>
              <li><a href="#" className="box-icon w_28 round social-tiktok bg_line"><i className="icon fs-12 icon-tiktok"></i></a></li>
              <li><a href="#" className="box-icon w_28 round social-pinterest bg_line"><i className="icon fs-12 icon-pinterest-1"></i></a></li>
            </ul>
            <div className="tf-top-bar_item text-center">
              <p className="text-uppercase fw-6 fs-14 mb-0">Free shipping on all orders over $50</p>
            </div>
            <div className="tf-top-bar_item text-end">
              <div className="tf-top-bar_list d-flex justify-content-end gap-30">
                <div className="tf-top-bar_item-inner">
                  <a href="#" className="d-flex gap-5 align-items-center">
                    <span className="icon-globe"></span>
                    <span className="fw-6">Eng</span>
                  </a>
                </div>
                <div className="tf-top-bar_item-inner">
                  <a href="#" className="d-flex gap-5 align-items-center">
                    <span className="icon-usd"></span>
                    <span className="fw-6">USD</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <header id="header" className="header header-default">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-inner">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="/images/logo/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="header-nav">
                  <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Shop</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Collections</a></li>
                      <li><a href="#">Pages</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right">
                  <div className="header-action">
                    <div className="header-action_item search-icon">
                      <a href="#" className="search-toggle"><i className="icon-search"></i></a>
                    </div>
                    <div className="header-action_item">
                      <a href="#" className="account"><i className="icon-account"></i></a>
                    </div>
                    <div className="header-action_item">
                      <a href="#" className="wishlist"><i className="icon-heart"></i></a>
                    </div>
                    <div className="header-action_item">
                      <a href="#" className="cart"><i className="icon-cart"></i></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
