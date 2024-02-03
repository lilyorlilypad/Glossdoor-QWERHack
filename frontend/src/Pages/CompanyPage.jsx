import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DEITab from "../Components/DEITab";
import ReviewsTab from "../Components/ReviewsTab";
import StatsTab from "../Components/StatsTab";
import apiConfig from "../apiConfig";
import axios from 'axios';

const mockCompanyData = {
    _id: "1",
    companyName: "Example Company",
    logo: "https://via.placeholder.com/150",
    companyDescription: "This is a mock description of Example Company, showcasing our values, mission, and services.",
    deiEfforts: "At Example Company, we are committed to fostering a diverse, equitable, and inclusive environment for all our employees and stakeholders.",
    stats: {
        metricA: 238,
        metricB: 90,
        metricC: -123
    },
    reviews:[]
    // Add more fields as needed for reviews, stats, etc.
};


const CompanyPage = ({ match }) => {
    const { companyId } = useParams();
    const [companyData, setCompanyData] = useState(mockCompanyData);
    const [activeTab, setActiveTab] = useState('reviews');

    useEffect(() => {
        // Assuming your backend is running on localhost:3000, adjust the URL as needed
        const apiUrl = apiConfig.baseUrl + apiConfig.companyCatalogs.getById(companyId)
        console.log(apiUrl)
        fetch(apiUrl)
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
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold">{companyData?.companyName}</h1>
                <img src={companyData?.logo} alt="logo" className="mx-auto" />
                <p>{companyData?.companyDescription}</p>
            </div>
            <div className="tabs">
                <button className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                <button className={`tab ${activeTab === 'dei' ? 'active' : ''}`} onClick={() => setActiveTab('dei')}>DEI</button>
                <button className={`tab ${activeTab === 'stats' ? 'active' : ''}`} onClick={() => setActiveTab('stats')}>Stats</button>
            </div>
            <div className="tab-content">
                {activeTab === 'reviews' && <ReviewsTab companyData={companyData} />}
                {activeTab === 'dei' && <DEITab companyData={companyData} />}
                {activeTab === 'stats' && <StatsTab companyData={companyData}/>}
            </div>
        </div>
    );
};

// Define ReviewsTab and StatsTab components to fetch and display data accordingly

export default CompanyPage;
