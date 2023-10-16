import React from 'react';
import backgroundImage from 'C:\\Users\\SOUMILI MUKHERJEE\\Desktop\\News Forum\\News-Forum\\newstime\\src\\components\\Newstime_29.webp';

const Header = () => {
    const handleScrollToSubscribe = () => {
        const footerPosition = document.getElementById('footer').offsetTop;
        window.scrollTo({
          top: footerPosition,
          behavior: 'smooth'
        });
      };

  return (
    
      
      <div className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button onClick={handleScrollToSubscribe} className="subs">Connect with us!</button>
    </div>
  );
};

export default Header;
