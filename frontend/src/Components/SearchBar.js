import React from "react";
import { useState } from "react";
import apiConfig from "../apiConfig";
import { useNavigate } from "react-router-dom";
import "./../styles/SearchBar.css"; // Make sure to create this CSS file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = async () => {
    let uri = apiConfig.baseUrl + apiConfig.companyCatalogs.getAll;
    uri += "?companyName=" + encodeURIComponent(searchTerm);

    try {
      console.log("Searching for:", searchTerm);
      const response = await fetch(uri);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/FilterResultPage", {
          state: { data },
        });
      } else {
        throw new Error("Search failed");
      }
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <>
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
