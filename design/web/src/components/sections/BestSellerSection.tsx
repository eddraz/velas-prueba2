import { useState, useEffect, useRef, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  hoverImage: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const BestSellerSection = () => {
  // Usamos useMemo para evitar recrear el array en cada renderizado
  const products = useMemo<Product[]>(() => [
    {
      id: 1,
      name: "Relaxed Fit Cotton Shirt",
      price: 29.99,
      oldPrice: 39.99,
      image: "/images/products/orange-1.jpg",
      hoverImage: "/images/products/white-1.jpg",
      category: "Clothing",
      isSale: true
    },
    {
      id: 2,
      name: "Slim Fit Stretch Jeans",
      price: 49.99,
      image: "/images/products/orange-1.jpg",
      hoverImage: "/images/products/white-1.jpg",
      category: "Clothing",
      isNew: true
    },
    {
      id: 3,
      name: "Cotton Blend Sweatshirt",
      price: 34.99,
      oldPrice: 44.99,
      image: "/images/products/orange-1.jpg",
      hoverImage: "/images/products/white-1.jpg",
      category: "Clothing",
      isSale: true
    },
    {
      id: 4,
      name: "Regular Fit Cotton T-shirt",
      price: 19.99,
      image: "/images/products/orange-1.jpg",
      hoverImage: "/images/products/white-1.jpg",
      category: "Clothing"
    },
    {
      id: 5,
      name: "Leather Crossbody Bag",
      price: 79.99,
      image: "/images/products/orange-1.jpg",
      hoverImage: "/images/products/white-1.jpg",
      category: "Accessories",
      isNew: true
    }
  ], []); // Array de dependencias vacío para que solo se ejecute una vez

  const swiperRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (products.length) {
      setTotalSlides(Math.ceil(products.length / 4));
    }
  }, [products]);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="flat-spacing-2 pt_0">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title">Best Seller</span>
          <div className="box-sw-navigation">
            <div 
              className="nav-sw square nav-next-slider nav-next-product" 
              onClick={handlePrevSlide}
            >
              <span className="icon icon-arrow1-left"></span>
            </div>
            <div 
              className="nav-sw square nav-prev-slider nav-prev-product"
              onClick={handleNextSlide}
            >
              <span className="icon icon-arrow1-right"></span>
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <div 
            ref={swiperRef} 
            className="swiper tf-sw-product-sell wrap-sw-over" 
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div key={product.id} className="swiper-slide">
                  <div className="card-product style-2">
                    <div className="card-product-wrapper">
                      <a href="#" className="product-img">
                        <img className="img-product" src={product.image} alt={product.name} />
                        <img className="img-hover" src={product.hoverImage} alt={product.name} />
                        {product.isNew && <span className="label-product new">New</span>}
                        {product.isSale && <span className="label-product sale">Sale</span>}
                      </a>
                      <div className="list-product-btn column-left">
                        <a href="#" className="box-icon wishlist bg_white btn-icon-action">
                          <span className="icon icon-heart"></span>
                        </a>
                        <a href="#" className="box-icon quickview bg_white btn-icon-action">
                          <span className="icon icon-expand"></span>
                        </a>
                      </div>
                      <div className="product-content">
                        <h3 className="product-title">
                          <a href="#">{product.name}</a>
                        </h3>
                        <div className="product-price">
                          {product.oldPrice ? (
                            <>
                              <span className="price sale">${product.price.toFixed(2)}</span>
                              <span className="price old">${product.oldPrice.toFixed(2)}</span>
                            </>
                          ) : (
                            <span className="price">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                        <a href="#" className="tf-btn style-2 btn-fill radius-3 animate-hover-btn">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
