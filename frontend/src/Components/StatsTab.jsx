import React from 'react';
import StatsGraphCard from './StatsGraphCard';

const StatsTab = ({ companyData }) => {
    const stats = companyData.ratings;
    const statsArray = Object.entries(stats);

    return (

        <div>
            {/* Render stats */}
            {statsArray.map(([metric, value], index) => (
                <div key={index} className="mb-2">
                    <strong>{metric}</strong>: {value}
                </div>
            ))}

            <StatsGraphCard companyId={companyData.companyId} />

        </div>
    );
};

export default StatsTab;
