"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const FeaturedCategories = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Women's Collection",
      image: "/images/categories/women.jpg",
      count: 120
    },
    {
      id: 2,
      name: "Men's Collection",
      image: "/images/categories/men.jpg",
      count: 85
    },
    {
      id: 3,
      name: "Accessories",
      image: "/images/categories/accessories.jpg",
      count: 64
    }
  ];

  return (
    <section className="tf-section tf-categories">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-heading text-center mb-60">
              <h4 className="tf-title">Shop By Categories</h4>
              <p>Explore our collections by category</p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="tf-categories-grid">
              <div className="row">
                {categories.map((category) => (
                  <div key={category.id} className="col-lg-4 col-md-6">
                    <div className="tf-category-item">
                      <div className="tf-category-thumb">
                        <Link href={`/category/${category.id}`}>
                          <Image 
                            src={category.image} 
                            alt={category.name} 
                            width={400} 
                            height={500}
                            className="category-image"
                          />
                        </Link>
                      </div>
                      <div className="tf-category-content">
                        <h4 className="tf-category-title">
                          <Link href={`/category/${category.id}`}>
                            {category.name}
                          </Link>
                        </h4>
                        <div className="tf-category-count">
                          {category.count} Products
                        </div>
                        <Link href={`/category/${category.id}`} className="tf-btn btn-outline">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
