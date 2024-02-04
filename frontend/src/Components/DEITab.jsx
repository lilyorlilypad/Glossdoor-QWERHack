import React from 'react';

const DEITab = ({ groups }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">DEI Efforts</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>

                {groups.map((group, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        {/* TODO: name should be styled more strongly. */}
                        <h3>{group.groupName}</h3>
                        <p>{group.groupDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DEITab;
