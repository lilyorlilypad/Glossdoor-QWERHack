import React from "react";
import { useState } from "react";
import "./../styles/SearchBar.css"; // Make sure to create this CSS file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    // Call your API with the searchTerm
    console.log("Searching for:", searchTerm);
    // Replace the console.log with your actual API call
    // Example: fetch(`https://api.yourbackend.com/search?q=${searchTerm}`)
  };

  return (
    <>
      <div className="logo">
        <img src="/Glossdoor.png"></img>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for any company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="search-bar-animation"></div>
      </div>
    </>
  );
};

export default SearchBar;
