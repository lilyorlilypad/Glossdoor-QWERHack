import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiConfig from "../apiConfig";
import "./../styles/SearchBar.css"; // Make sure to create this CSS file
import { RATING_SETTINGS } from "./FilterBar";

const SearchBar = ({ filterSetting }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  let ratingRange; // [lower bound, upper bound].
  switch (filterSetting) {
    case RATING_SETTINGS.ABOVE_4_DOT_5:
      ratingRange = [4.5, null];
      break;
    case RATING_SETTINGS.BETWEEN_4_AND_4_DOT_5:
      ratingRange = [4, 4.5];
      break;
    case RATING_SETTINGS.BETWEEN_3_AND_4:
      ratingRange = [3, 4];
      break;
    case RATING_SETTINGS.BELOW_3:
      ratingRange = [null, 3];
      break;
    default:
      ratingRange = [null, null];
  }

  const search = async () => {
    let uri = apiConfig.baseUrl + apiConfig.companyCatalogs.getAll;
    uri += "?companyName=" + encodeURIComponent(searchTerm);
    const [lowerRatingBound, upperRatingBound] = ratingRange;
    if (lowerRatingBound !== null) {
      uri += "&ratingGreater=" + encodeURIComponent(lowerRatingBound);
    }
    if (upperRatingBound !== null) {
      uri += "&ratingLess=" + encodeURIComponent(upperRatingBound);
    }

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
