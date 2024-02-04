import React, { useEffect, useState } from "react";
import CompanyCard from "../Components/CompanyCard";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
import apiConfig from "../apiConfig";
import "./../styles/AllCompaniesPage.css";

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
      <SearchBarWithFilter />

      <div className="px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {companies.length > 0 ? (
            companies.map((company) => (
              <CompanyCard
                key={company._id} // Ensure you have a unique key for each item
                title={company.companyName}
                description={company.companyDescription}
                rating={company.ratings[0]}
                logo={`/${company.companyName}.png`}
              // Add other necessary props
              />
            ))
          ) : (
            <p className="text-center">No companies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCompaniesPage;
