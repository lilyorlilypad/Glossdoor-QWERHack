import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CompanyCard from "../Components/CompanyCard";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
import storageService from "../services/storage.service";
import "./../styles/FilterResultPage.css";

const FilterResultPage = () => {
  const location = useLocation();
  const { data } = location.state || { data: [] };
  const [imageUrl, setImageUrl] = useState(""); // Single URL state

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
    <div className="filter-result-page">
      <header>{/* Other header content */}</header>
      <SearchBarWithFilter />

      <div>
        {data.length > 0 && (
          <CompanyCard
            key={data[0]._id} // Key isn't strictly necessary here since we're rendering a single item, but it's good practice
            title={data[0].companyName}
            companyDescription={data[0].companyDescription}
            ratings={data[0].ratings ? data[0].ratings[0] : undefined}
            image={imageUrl} // Pass the imageUrl directly
          />
        )}
        {data.length === 0 && <p>No companies found.</p>}
      </div>
    </div>
  );
};

export default FilterResultPage;
