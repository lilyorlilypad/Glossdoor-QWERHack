import React, { useState, useEffect } from "react";
import CompanyCard from "../Components/CompanyCard";
import "./../styles/AllCompaniesPage.css";
import FilterBar from "../Components/FilterBar";
import SearchBar from "../Components/SearchBar";
import apiConfig from "../apiConfig";

const AllCompaniesPage = () => {
  return (
    <div className="filter-result-page">
      <header>{/* Other header content */}</header>
      <div className="searchBar-container">
        <SearchBar className="result-search" />
      </div>
      <FilterBar />

      <div className="company-container">
        {companies.length > 0 ? (
          companies.map((company) => (
            <CompanyCard
              key={company._id} // Ensure you have a unique key for each item
              title={company.companyName}
              companyDescription={company.companyDescription}
              ratings={company.ratings ? company.ratings[0] : undefined}
              image="" // Assuming each company has an 'imageUrl' field
            />
          ))
        ) : (
          <p>No companies found.</p>
        )}
      </div>
    </div>
  );
};

export default AllCompaniesPage;
