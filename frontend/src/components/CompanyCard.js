import React from "react";
import "./../styles/CompanyCard.css"; // Make sure to create a CSS file with the name companyCard.css
import { Link } from "react-router-dom";
// Define the companyCard component


const CompanyCard = ({ id, title, logo, rating, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <Link to={`/company/${id}`} className="no-underline text-black">
        <div className="px-4 py-4">
          <div className="flex row justify-end">
            <div className="font-bold text-xl mb-2">{title}</div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-0 mb-2">
              Rating: {rating}
            </span>
          </div>
          <div className="flex m-3">
            <img src={logo}></img>
          </div>

          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </Link>
    </div>
  );
};

export default CompanyCard;
