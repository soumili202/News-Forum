import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation">
      <form className="search-form">
        <input type="text" placeholder="Search" className="search-input" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <select className="select-option">
        <option value="all">All</option>
        <option value="local">Local</option>
        <option value="national">National</option>
        <option value="international">International</option>
      </select>
    </div>
  );
};

export default Navigation;
