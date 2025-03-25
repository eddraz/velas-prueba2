const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget">
              <div className="logo">
                <img src="/images/logo/logo.png" alt="Logo" />
              </div>
              <p className="description">
                Discover the perfect blend of style and comfort with our curated collection of fashion essentials.
              </p>
              <ul className="social-icons d-flex gap-10">
                <li><a href="#" className="box-icon w_28 round social-facebook"><i className="icon fs-12 icon-fb"></i></a></li>
                <li><a href="#" className="box-icon w_28 round social-twiter"><i className="icon fs-10 icon-Icon-x"></i></a></li>
                <li><a href="#" className="box-icon w_28 round social-instagram"><i className="icon fs-12 icon-instagram"></i></a></li>
                <li><a href="#" className="box-icon w_28 round social-tiktok"><i className="icon fs-12 icon-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="widget-title">Customer Service</h3>
              <ul className="widget-links">
                <li><a href="#">Help & Contact Us</a></li>
                <li><a href="#">Returns & Refunds</a></li>
                <li><a href="#">Online Stores</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="widget-title">Company</h3>
              <ul className="widget-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Our Responsibility</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="widget-title">Newsletter</h3>
              <p className="description">
                Subscribe to our newsletter to receive updates on new arrivals, special offers and promotions.
              </p>
              <div className="newsletter-form">
                <form>
                  <input type="email" placeholder="Your email address" />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="payment-methods">
            <img src="/images/payment-methods.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
