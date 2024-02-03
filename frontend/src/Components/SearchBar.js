import React from "react";
import "./../styles/SearchBar.css"; // Make sure to create this CSS file

const SearchBar = () => {
  return (
    <>
      <div className="logo"> Glossdoor</div>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for any company"
        />
        <div className="search-bar-animation"></div>
      </div>
    </>
  );
};

export default SearchBar;
