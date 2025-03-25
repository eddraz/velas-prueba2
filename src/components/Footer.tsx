"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="tf-footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="tf-footer-widget">
              <div className="tf-footer-logo">
                <Link href="/">
                  <Image 
                    src="/images/logo/logo.png" 
                    alt="Ecomus Logo" 
                    width={120} 
                    height={40} 
                  />
                </Link>
              </div>
              <p className="tf-footer-desc">
                Discover the latest fashion trends with our premium quality clothing and accessories.
              </p>
              <ul className="tf-social-icons">
                <li><a href="#" className="facebook"><i className="icon-fb"></i></a></li>
                <li><a href="#" className="twitter"><i className="icon-Icon-x"></i></a></li>
                <li><a href="#" className="instagram"><i className="icon-instagram"></i></a></li>
                <li><a href="#" className="pinterest"><i className="icon-pinterest-1"></i></a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="tf-footer-widget">
              <h4 className="tf-footer-heading">Shopping</h4>
              <ul className="tf-footer-links">
                <li><Link href="/shop">Shop All</Link></li>
                <li><Link href="/category/women">Women</Link></li>
                <li><Link href="/category/men">Men</Link></li>
                <li><Link href="/category/accessories">Accessories</Link></li>
                <li><Link href="/sale">Sale</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="tf-footer-widget">
              <h4 className="tf-footer-heading">Information</h4>
              <ul className="tf-footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/shipping">Shipping & Returns</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="tf-footer-widget">
              <h4 className="tf-footer-heading">Contact</h4>
              <ul className="tf-footer-contact">
                <li>
                  <i className="icon-map-pin"></i>
                  <span>123 Fashion Street, New York, NY 10001, USA</span>
                </li>
                <li>
                  <i className="icon-phone"></i>
                  <a href="tel:+11234567890">+1 (123) 456-7890</a>
                </li>
                <li>
                  <i className="icon-mail"></i>
                  <a href="mailto:info@ecomus.com">info@ecomus.com</a>
                </li>
              </ul>
              <div className="tf-payment-methods">
                <h6>We Accept</h6>
                <div className="payment-icons">
                  <Image 
                    src="/images/payment-methods.png" 
                    alt="Payment Methods" 
                    width={200} 
                    height={30} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tf-footer-bottom">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-copyright">
                <p>&copy; {new Date().getFullYear()} Ecomus. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
