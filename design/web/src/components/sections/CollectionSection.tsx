import React from 'react';

const CollectionSection: React.FC = () => {
  return (
    <section className="flat-spacing-8">
      <div className="container-full">
        <div className="masonry-layout">
          <div className="item-1 collection-item large hover-img">
            <div className="collection-inner">
              <a href="#" className="collection-image img-style rounded-0">
                <img src="/images/collections/collection-21.jpg" alt="Women's Collection" />
              </a>
              <div className="collection-content">
                <a href="#" className="tf-btn collection-title hover-icon">
                  <span>Women</span>
                  <i className="icon icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="item-2 collection-item large hover-img">
            <div className="collection-inner">
              <a href="#" className="collection-image img-style rounded-0">
                <img src="/images/collections/collection-22.jpg" alt="Handbag Collection" />
              </a>
              <div className="collection-content">
                <a href="#" className="tf-btn collection-title hover-icon">
                  <span>Handbag</span>
                  <i className="icon icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="item-3 collection-item large hover-img">
            <div className="collection-inner">
              <a href="#" className="collection-image img-style rounded-0">
                <img src="/images/collections/collection-23.jpg" alt="Accessories Collection" />
              </a>
              <div className="collection-content">
                <a href="#" className="tf-btn collection-title hover-icon">
                  <span>Accessories</span>
                  <i className="icon icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="item-4 collection-item large hover-img">
            <div className="collection-inner">
              <a href="#" className="collection-image img-style rounded-0">
                <img src="/images/collections/collection-24.jpg" alt="Men's Collection" />
              </a>
              <div className="collection-content">
                <a href="#" className="tf-btn collection-title hover-icon">
                  <span>Men</span>
                  <i className="icon icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
