import React, { useState, useEffect } from "react";
import CompanyCard from "../Components/CompanyCard";
import "./../styles/AllCompaniesPage.css";
import FilterBar from "../Components/FilterBar";
import SearchBar from "../Components/SearchBar";
import apiConfig from "../apiConfig";

const AllCompaniesPage = () => {
  const [companies, setCompanyData] = useState({});

  useEffect(() => {
    const companyURL = apiConfig.baseUrl + apiConfig.companyCatalogs.getAll;
    console.log(companyURL);
    fetch(companyURL)
      .then((response) => {
        if (!response.ok) {
          // If the server responds with a 404, use mock data
          if (response.status === 404) {
            throw new Error("Company catalog not found, using mock data");
          }
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCompanyData(data);
      });
  });

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
