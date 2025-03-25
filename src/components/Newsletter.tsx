"use client";

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="tf-section tf-newsletter">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-newsletter-inner">
              <div className="tf-newsletter-content">
                <h3 className="title">Subscribe to our newsletter</h3>
                <p className="desc">Get the latest updates on new products and upcoming sales</p>
                
                <form className="tf-newsletter-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="tf-btn btn-subscribe">
                      Subscribe
                    </button>
                  </div>
                  {isSubmitted && (
                    <div className="form-message success">
                      Thank you for subscribing!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
