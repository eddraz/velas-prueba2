"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: 89.99,
      oldPrice: 129.99,
      image: "/images/shop/products/1.jpg",
      category: "Women",
      isSale: true
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 149.99,
      image: "/images/shop/products/2.jpg",
      category: "Men",
      isNew: true
    },
    {
      id: 3,
      name: "Summer Floral Skirt",
      price: 59.99,
      image: "/images/shop/products/3.jpg",
      category: "Women"
    },
    {
      id: 4,
      name: "Casual Cotton T-Shirt",
      price: 39.99,
      oldPrice: 49.99,
      image: "/images/shop/products/4.jpg",
      category: "Men",
      isSale: true
    }
  ];

  return (
    <section className="tf-section tf-featured-product">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-heading text-center mb-60">
              <h4 className="tf-title">Featured Products</h4>
              <p>Discover our handpicked selection of premium products</p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="tf-product-grid">
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="tf-product-item">
                      <div className="tf-product-thumb">
                        <Link href={`/product/${product.id}`}>
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            width={300} 
                            height={400}
                            className="product-image"
                          />
                        </Link>
                        {product.isNew && <div className="tf-badge new">New</div>}
                        {product.isSale && <div className="tf-badge sale">Sale</div>}
                        <div className="tf-product-actions">
                          <a href="#" className="tf-action-btn wishlist">
                            <i className="icon-heart"></i>
                          </a>
                          <a href="#" className="tf-action-btn quickview">
                            <i className="icon-eye"></i>
                          </a>
                          <a href="#" className="tf-action-btn add-to-cart">
                            <i className="icon-cart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tf-product-content">
                        <div className="tf-product-category">{product.category}</div>
                        <h4 className="tf-product-title">
                          <Link href={`/product/${product.id}`}>
                            {product.name}
                          </Link>
                        </h4>
                        <div className="tf-product-price">
                          {product.oldPrice ? (
                            <>
                              <span className="price-sale">${product.price.toFixed(2)}</span>
                              <span className="price-old">${product.oldPrice.toFixed(2)}</span>
                            </>
                          ) : (
                            <span className="price">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center mt-40">
            <Link href="/shop" className="tf-btn btn-view-all">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
