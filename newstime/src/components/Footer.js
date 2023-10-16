
import React from 'react';
import SubscriptionForm from './SubscriptionForm';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <h2>Subscribe to our newsletter</h2>
      <SubscriptionForm />
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="address">
        <h3>Address</h3>
        <p>1234 Street Name, City, Country</p>
      </div>
    </div>
  );
};

export default Footer;

