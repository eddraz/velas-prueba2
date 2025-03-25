"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="tf-header header-default">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-header-inner">
              <div className="tf-header-logo">
                <Link href="/">
                  <Image 
                    src="/images/logo/logo.png" 
                    alt="Ecomus Logo" 
                    width={120} 
                    height={40} 
                  />
                </Link>
              </div>
              
              <div className={`tf-header-menu ${isMenuOpen ? 'active' : ''}`}>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/products">Products</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/collections">Collections</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/pages">Pages</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              
              <div className="tf-header-right">
                <div className="tf-header-search">
                  <button className="tf-search-toggle">
                    <i className="icon-search"></i>
                  </button>
                </div>
                <div className="tf-header-account">
                  <Link href="/account">
                    <i className="icon-user"></i>
                  </Link>
                </div>
                <div className="tf-header-wishlist">
                  <Link href="/wishlist">
                    <i className="icon-heart"></i>
                    <span className="count-wishlist">0</span>
                  </Link>
                </div>
                <div className="tf-header-cart">
                  <Link href="/cart">
                    <i className="icon-cart"></i>
                    <span className="count-cart">0</span>
                  </Link>
                </div>
                <button 
                  className="tf-menu-toggle" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
