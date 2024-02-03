import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DEITab from "../Components/DEITab";
import ReviewsTab from "../Components/ReviewsTab";
import StatsTab from "../Components/StatsTab";
import WishlistTab from "../Components/WishlistTab";
import apiConfig from "../apiConfig";

const mockCompanyData = {
  _id: "1",
  companyName: "Example Company",
  logo: "https://via.placeholder.com/150",
  companyDescription: "This is a mock description of Example Company, showcasing our values, mission, and services.",
  deiEfforts: "At Example Company, we are committed to fostering a diverse, equitable, and inclusive environment for all our employees and stakeholders.",
  ratings: {
    metricA: 238,
    metricB: 90,
    metricC: -123
  },
  reviews: []
  // Add more fields as needed for reviews, stats, etc.
};

const CompanyPage = ({ match }) => {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState(mockCompanyData);
  const [affinityGroups, setAffinityGroups] = useState([]);
  const [activeTab, setActiveTab] = useState('reviews');

  useEffect(() => {
    const companyApiUrl = apiConfig.baseUrl + apiConfig.companyCatalogs.getById(companyId);
    const affinityGroupsApiUrl = apiConfig.baseUrl + apiConfig.affinityGroups.getByCompanyId(companyId);
    console.log(companyApiUrl)
    fetch(companyApiUrl)
      .then(response => {
        if (!response.ok) {
          // If the server responds with a 404, use mock data
          if (response.status === 404) {
            throw new Error('Company catalog not found, using mock data');
          }
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCompanyData(data);
      })
      .catch(error => {
        console.error(error.message);
        // Set to mock data in case of error or if no data found
        setCompanyData(mockCompanyData); // Ensure mockCompanyData is defined
      });
    fetch(affinityGroupsApiUrl)
      .then(response => {
        if (!response.ok) {
          // If the server responds with a 404, use mock data
          if (response.status === 404) {
            throw new Error('Company catalog not found, using default data');
          }
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(setAffinityGroups)
      .catch(error => {
        console.error(error.message);
        setAffinityGroups([]); // Default data: no groups lol.
      })
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{companyData?.companyName}</h1>
        <img src={companyData?.logo} alt="logo" className="mx-auto" />
        <p>{companyData?.companyDescription}</p>
      </div>
      {/* TODO: when the buttons get wrapped to the next row (by shrinking width),
        there is a huge gap between the rows. */}
      <div className="tabs" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button className={`tab ${activeTab === 'reviews' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
        <button className={`tab ${activeTab === 'dei' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveTab('dei')}>DEI</button>
        <button className={`tab ${activeTab === 'stats' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveTab('stats')}>Stats</button>
        <button className={`tab ${activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveTab('wishlist')}>Wishlist</button>
      </div>
      <div className="tab-content">
        {activeTab === 'reviews' && <ReviewsTab companyData={companyData} />}
        {activeTab === 'dei' && <DEITab groups={affinityGroups} />}
        {activeTab === 'stats' && <StatsTab companyData={companyData} />}
        {activeTab === 'wishlist' && <WishlistTab companyId={companyData._id} />}
      </div>
    </div>
  );
};

// Define ReviewsTab and StatsTab components to fetch and display data accordingly

export default CompanyPage;
