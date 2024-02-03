import React from "react";
import "./../styles/FilterBar.css";
const FilterBar = () => {
  return (
    <div className="filter-container">
      <div className="filter-row">
        <button className="filter-button">Rating above 4.5</button>
        <button className="filter-button">Rating 4.0-4.5</button>
        <button className="filter-button">Rating 3.0-4.0</button>
        <button className="filter-button">Rating below 3.0</button>
      </div>
    </div>
  );
};

export default FilterBar;
