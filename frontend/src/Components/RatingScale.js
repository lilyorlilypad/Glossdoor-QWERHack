import React from "react";
import "./../styles/RatingScale.css"; // Make sure to have the CSS file in the same directory

const RatingScale = () => {
  const criteria = [
    { title: "Overall", description: "Love working here" },
    { title: "Inclusivity", description: "Inclusive company culture" },
    {
      title: "Support",
      description: "A lot support for minority groups",
    },
    {
      title: "Responsiveness",
      description: "Responsive to discrimination issues",
    },
    { title: "Recruitment", description: "Fair hiring practices" },
  ];
  return (
    <div className="ratings-container">
      <h2>RATINGS</h2>
      <div className="ratings-scale">
        <div className="scale-labels">
          <span>
            Strongly <br />
            Disagree
          </span>
          <span>Disagree</span>
          <span>Neutral</span>
          <span>Agree</span>
          <span>
            Strongly <br />
            Agree
          </span>
        </div>
        <div>
          {criteria.map((item) => (
            <div key={item.title} className="rating-item">
              <div className="label-container">
                <label className="main-label">{item.title}</label>
                <label className="sub-label">{item.description}</label>
              </div>
              <input type="range" min="1" max="5" defaultValue="3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingScale;
