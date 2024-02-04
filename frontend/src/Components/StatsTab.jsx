import React from 'react';
import StatsGraphCard from './StatsGraphCard';

const StatsTab = ({ companyData }) => {
    const stats = companyData.ratings;
    const statsArray = Object.entries(stats);

    return (

        <div>
            {/* Render stats */}
            <p>Below are average scores of each metric and individual score distributions.</p>

            <StatsGraphCard companyId={companyData._id} />

        </div>
    );
};

export default StatsTab;
