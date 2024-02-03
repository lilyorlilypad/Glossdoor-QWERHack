import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mockCompanyData = {
    _id: "1",
    companyName: "Example Company",
    logo: "https://via.placeholder.com/150",
    companyDescription: "This is a mock description of Example Company, showcasing our values, mission, and services.",
    deiEfforts: "At Example Company, we are committed to fostering a diverse, equitable, and inclusive environment for all our employees and stakeholders.",
    // Add more fields as needed for reviews, stats, etc.
};


const CompanyPage = ({ match }) => {
    const [company, setCompany] = useState(mockCompanyData);
    const [activeTab, setActiveTab] = useState('reviews');

    // useEffect(() => {
    //     const fetchCompany = async () => {
    //         const response = await axios.get(`/api/companies/${match.params.id}`);
    //         setCompany(response.data);
    //     };
    //     fetchCompany();
    // }, [match.params.id]);

    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold">{company?.companyName}</h1>
                <img src={company?.logo} alt="logo" className="mx-auto" />
                <p>{company?.companyDescription}</p>
            </div>
            <div className="tabs">
                <button className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                <button className={`tab ${activeTab === 'dei' ? 'active' : ''}`} onClick={() => setActiveTab('dei')}>DEI</button>
                <button className={`tab ${activeTab === 'stats' ? 'active' : ''}`} onClick={() => setActiveTab('stats')}>Stats</button>
            </div>
            <div className="tab-content">
                {/*{activeTab === 'reviews' && <ReviewsTab companyId={match.params.id} />}*/}
                {/*{activeTab === 'dei' && <div>{company?.deiInfo}</div>}*/}
                {/*{activeTab === 'stats' && <StatsTab companyId={match.params.id} />}*/}
            </div>
        </div>
    );
};

// Define ReviewsTab and StatsTab components to fetch and display data accordingly

export default CompanyPage;
