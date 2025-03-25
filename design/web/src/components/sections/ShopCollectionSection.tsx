import React from 'react';

const ShopCollectionSection: React.FC = () => {
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text">
          <div className="tf-image-wrap">
            <img src="/images/collections/collection-25.jpg" alt="Denim Collection" />
          </div>
          <div className="tf-content-wrap">
            <span className="sub-heading text-uppercase fw-7">SPRING SALE 30% OFF</span>
            <div className="heading">Effortless <br /> Denim Delights</div>
            <p className="description">Discover the versatility of denim with our collection of jeans, jackets</p>
            <a href="#" className="tf-btn style-2 btn-fill radius-3 animate-hover-btn">Shop collection</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollectionSection;
