import React from 'react';

const StatsTab = ({ companyData }) => {
    const stats = companyData.stats; // Assuming 'stats' is part of companyData
    const statsArray = Object.entries(stats);

    return (

        <div>
            {/* Render stats */}
            {statsArray.map(([metric, value], index) => (
                <div key={index} className="mb-2">
                    <strong>{metric}</strong>: {value}
                </div>
            ))}
        </div>
    );
};

export default StatsTab;
