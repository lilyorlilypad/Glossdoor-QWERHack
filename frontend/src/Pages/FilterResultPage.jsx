import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";

const FilterResultPage = () => {
  return (
    <div className="filter-result-page">
      <header>
        <h1>This should be the search bar</h1>
        {/* Other header content */}
      </header>
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
