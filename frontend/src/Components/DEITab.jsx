import React from "react";
import "../styles/DEITab.css";

const DEITab = ({ groups }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">DEI Efforts</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {groups.map((group, index) => (
          <div
            key={index}
            className="enlarge-on-hover bg-white"
            style={{
              border: "1px solid #fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>
              <strong>{group.groupName}</strong>
            </h3>
            <br />
            <p>{group.groupDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DEITab;
