import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CompanyCard from "../Components/CompanyCard";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
import storageService from "../services/storage.service";

const FilterResultPage = () => {
  const location = useLocation();
  const { data } = location.state || { data: [] };
  const [imageUrl, setImageUrl] = useState({}); // Single URL state

  useEffect(() => {
    const fetchUrl = async () => {
      if (data.length > 0) {
        const company = data[0]; // Assuming only one company is present
        const fetchedUrl = await storageService.getURL(
          "company",
          company._id,
          "logo.webp"
        );
        if (fetchedUrl) {
          setImageUrl(fetchedUrl); // Set the fetched URL
        }
      }
    };

    fetchUrl();
  }, [data]);

  return (
    <div className="filter-result-page mt-10">
      <header>{/* Other header content */}</header>
      <SearchBarWithFilter />

      <div className="px-4 py-2 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {data.length > 0 ? (
            data.map((company) => (
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
  );
};

export default FilterResultPage;
