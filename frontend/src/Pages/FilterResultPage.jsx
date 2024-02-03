import React, { useState, useEffect } from "react";
import CompanyCard from "../Components/CompanyCard";

import { useLocation } from "react-router-dom";
// import { Search } from "lucide-react";
import "./../styles/FilterResultPage.css";
import FilterBar from "../Components/FilterBar";
import SearchBar from "../Components/SearchBar";

const FilterResultPage = () => {
  const location = useLocation();
  const { data } = location.state || { data: [] };

  console.log("passedData:", data);
  return (
    <div className="filter-result-page">
      <header>{/* Other header content */}</header>
      <div className="searchBar-container">
        <SearchBar className="result-search" />
      </div>
      <FilterBar />
      <section className="company-list">
        {/* Here you can map over your data to create multiple CompanyCard components */}
        <CompanyCard
          title="Amazon"
          image="/amazon.png"
          rating="3"
          reviewNumber="4"
          location="los angeles"
          industry="software engineering"
        />
        {/* Repeat the <CompanyCard /> for as many companies as you have, or dynamically create them based on data */}
      </section>
      {/* Other page content */}
    </div>
  );
};

export default FilterResultPage;
