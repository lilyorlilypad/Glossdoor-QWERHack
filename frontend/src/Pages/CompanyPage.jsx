import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyPage = ({ match }) => {
    const [company, setCompany] = useState(null);
    const [activeTab, setActiveTab] = useState('reviews');

    useEffect(() => {
        const fetchCompany = async () => {
            const response = await axios.get(`/api/companies/${match.params.id}`);
            setCompany(response.data);
        };
        fetchCompany();
    }, [match.params.id]);

    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold">{company?.name}</h1>
                <img src={company?.logo} alt="logo" className="mx-auto" />
                <p>{company?.description}</p>
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
