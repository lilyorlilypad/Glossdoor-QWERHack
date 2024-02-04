import React, { useState, useEffect } from "react";
import CompanyCard from "../Components/CompanyCard";
import "./../styles/AllCompaniesPage.css";
import FilterBar from "../Components/FilterBar";
import SearchBar from "../Components/SearchBar";
import apiConfig from "../apiConfig";

const AllCompaniesPage = () => {
  const [companies, setCompanies] = useState([]); // State to store companies

  useEffect(() => {
    const fetchCompanies = async () => {
      let uri = apiConfig.baseUrl + apiConfig.companyCatalogs.getAll;

      try {
        const response = await fetch(uri); // Make the GET request
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Throw an error on a bad status
        }
        const data = await response.json(); // Parse the JSON from the response
        setCompanies(data); // Update state with the fetched companies
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchCompanies();
  }, []); // Empty dependency array means this effect runs once on mount

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
              image={company.imageUrl} // Assuming each company has an 'imageUrl' field
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
