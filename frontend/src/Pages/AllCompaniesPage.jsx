import React, { useEffect, useState } from "react";
import CompanyCard from "../Components/CompanyCard";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
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
    <div className="filter-result-page mt-10">
      <header></header>
        <div className="container bg-primary mx-auto pt-3 rounded-lg">
            <div className="z-10 text-center">
                <h1 className={"text-dark text-4xl font-bold mb-5 mt-5"}>Glossdoor</h1>
                <SearchBarWithFilter className="mt-10"/>
            </div>
        </div>


      <div className="flex container mx-auto justify-center px-2 py-2">
          <div className=" flex flex-col bg-gray-200 py-6 px-6 items-center rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {companies.length > 0 ? (
                      companies.map((company) => (
                          <CompanyCard
                              id={company._id} // Ensure you have a unique key for each item
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
    </div>
  );
};

export default AllCompaniesPage;
