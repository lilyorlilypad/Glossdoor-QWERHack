import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DEITab from "../Components/DEITab";
import ReviewsTab from "../Components/ReviewsTab";
import StatsTab from "../Components/StatsTab";
import WishlistTab from "../Components/WishlistTab";
import apiConfig from "../apiConfig";

const mockCompanyData = {
  _id: "1",
  companyName: "Example Company",
  logo: "https://via.placeholder.com/150",
  companyDescription:
    "This is a mock description of Example Company, showcasing our values, mission, and services.",
  deiEfforts:
    "At Example Company, we are committed to fostering a diverse, equitable, and inclusive environment for all our employees and stakeholders.",
  ratings: {
    metricA: 238,
    metricB: 90,
    metricC: -123,
  },
  reviews: [],
  // Add more fields as needed for reviews, stats, etc.
};

const CompanyPage = ({ match }) => {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState(mockCompanyData);
  const [affinityGroups, setAffinityGroups] = useState([]);
  const [activeTab, setActiveTab] = useState("reviews");

  useEffect(() => {
    const companyApiUrl =
      apiConfig.baseUrl + apiConfig.companyCatalogs.getById(companyId);
    const affinityGroupsApiUrl =
      apiConfig.baseUrl + apiConfig.affinityGroups.getByCompanyId(companyId);
    console.log(companyApiUrl);
    fetch(companyApiUrl)
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
      })
      .catch((error) => {
        console.error(error.message);
        // Set to mock data in case of error or if no data found
        setCompanyData(mockCompanyData); // Ensure mockCompanyData is defined
      });
    fetch(affinityGroupsApiUrl)
      .then((response) => {
        if (!response.ok) {
          // If the server responds with a 404, use mock data
          if (response.status === 404) {
            throw new Error("Company catalog not found, using default data");
          }
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(setAffinityGroups)
      .catch((error) => {
        console.error(error.message);
        setAffinityGroups([]); // Default data: no groups lol.
      });
  }, []);

  return (
    <div className="min-h-screen">
      <div className=" p-6 container mx-auto bg-primary text-center rounded-lg">
        <h1 className="text-3xl font-bold text-dark mb-2 items-center">
          {companyData?.companyName}
        </h1>
        <img
          src={`/${companyData.companyName}.png`}
          alt="logo"
          className="mx-auto mb-2 w-24 h-24 object-cover"
        />
        <p className="text-darker">{companyData?.companyDescription}</p>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-3">
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm focus:outline-none transition-colors duration-300 ${
                activeTab === "reviews"
                  ? "bg-dark text-white"
                  : "bg-light-gray text-dark"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm focus:outline-none transition-colors duration-300 ${
                activeTab === "dei"
                  ? "bg-dark text-white"
                  : "bg-light-gray text-dark"
              }`}
              onClick={() => setActiveTab("dei")}
            >
              DEI
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm focus:outline-none transition-colors duration-300 ${
                activeTab === "stats"
                  ? "bg-dark text-white"
                  : "bg-light-gray text-dark"
              }`}
              onClick={() => setActiveTab("stats")}
            >
              Stats
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm focus:outline-none transition-colors duration-300 ${
                activeTab === "wishlist"
                  ? "bg-dark text-white"
                  : "bg-light-gray text-dark"
              }`}
              onClick={() => setActiveTab("wishlist")}
            >
              Wishlist
            </button>
          </div>
          <div className="tab-content bg-gray-200 p-6 rounded-xl shadow-lg">
            {activeTab === "reviews" && (
              <ReviewsTab companyData={companyData} />
            )}
            {activeTab === "dei" && <DEITab groups={affinityGroups} />}
            {activeTab === "stats" && <StatsTab companyData={companyData} />}
            {activeTab === "wishlist" && (
              <WishlistTab companyId={companyData._id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Define ReviewsTab and StatsTab components to fetch and display data accordingly

export default CompanyPage;
