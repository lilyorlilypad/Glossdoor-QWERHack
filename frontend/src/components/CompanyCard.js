import React from "react";
import "./../styles/CompanyCard.css"; // Make sure to create a CSS file with the name companyCard.css

// Define the companyCard component

const CompanyCard = ({
  title,
  image,
  rating,
  reviewNumber,
  location,
  industry,
}) => {
  return (
    <div className="company-card">
      <div className="company-title">{title}</div>
      <div className="company-image-container">
        <img src={image} alt="Company" className="company-image" />
      </div>
      <div className="company-info">
        <div className="company-rating">Rating: {rating}</div>
        <div className="company-review">reviews: {reviewNumber}</div>
        <div className="company-location">Location: {location}</div>
        <div className="company-industry">Industry: {industry}</div>
      </div>
    </div>
  );
};

export default CompanyCard;
