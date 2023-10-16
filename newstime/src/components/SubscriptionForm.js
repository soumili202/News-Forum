import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const sendEmail = () => {
    const templateParams = {
      user_email: email,
    };

    // Replace with your actual Service ID and Template ID from Email.js
    const USER_ID = 'Yb0RZ4BXYc6v5u_hc';
    const SERVICE_ID = 'service_h49dr7z';
    const TEMPLATE_ID = 'template_qajfj5u';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call sendEmail function to send the email
    sendEmail();

    // Additional logic (e.g., storing email in the backend)
    // ...
  };
  const handleSubscribe = () => {
    fetch('http://localhost:5000/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={handleSubscribe}>Subscribe</button>
    </form>
  );
};

export default SubscriptionForm;