import React from 'react';

const DEITab = ({ companyData }) => {
    const deiInfo = companyData.deiEfforts; // Assuming 'deiInfo' is part of companyData

    return (
        <div>
            {/* Render DEI information */}
            <p>{deiInfo}</p>
        </div>
    );
};

export default DEITab;
