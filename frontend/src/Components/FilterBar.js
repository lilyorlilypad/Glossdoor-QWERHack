import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/FilterBar.css";

export const RATING_SETTINGS = {
  NONE: 0,
  ABOVE_4_DOT_5: 1,
  BETWEEN_4_AND_4_DOT_5: 2,
  BETWEEN_3_AND_4: 3,
  BELOW_3: 4,
};

const FilterBar = () => {
  const [filterSetting, setFilterSetting] = useState(RATING_SETTINGS.NONE);
  const navigate = useNavigate();

  /**
   * @type {const}
   */
  const buttonsConfig = [
    ["Rating above 4.5", RATING_SETTINGS.ABOVE_4_DOT_5],
    ["Rating 4.0-4.5", RATING_SETTINGS.BETWEEN_4_AND_4_DOT_5],
    ["Rating 3.0-4.0", RATING_SETTINGS.BETWEEN_3_AND_4],
    ["Rating below 3.0", RATING_SETTINGS.BELOW_3],
  ];

  const buttons = buttonsConfig.map(([text, setting], index) => {
    const handleClick = () => {
      // The filter is already on this setting, so the button was clicked to
      // REMOVE the filter.
      if (filterSetting === setting) {
        setFilterSetting(RATING_SETTINGS.NONE);
        navigate("/AllCompaniesPage");
      // Otherwise this button was clicked to APPLY the filter.
      } else {
        let queryParams;
        switch (setting) {
          case RATING_SETTINGS.ABOVE_4_DOT_5:
            queryParams = "?ratingGreater=4.5";
            break;
          case RATING_SETTINGS.BETWEEN_4_AND_4_DOT_5:
            queryParams = "?ratingGreater=4&ratingLess=4.5";
            break;
          case RATING_SETTINGS.BETWEEN_3_AND_4:
            queryParams = "?ratingGreater=3&ratingLess=4";
            break;
          case RATING_SETTINGS.BELOW_3:
            queryParams = "?ratingLess=3";
            break;
          default:
            queryParams = "";
        }
        setFilterSetting(setting);
        navigate(`/AllCompaniesPage${queryParams}`);
      }
    };

    let className = "filter-button";
    if (filterSetting === setting) {
      className += " filter-button-selected";
    }
    return (
      <button className={className} onClick={handleClick} key={index}>
        {text}
      </button>
    );
  });

  return (
    <div className="filter-container">
      <div className="filter-row">
        {buttons.map(button => button)}
      </div>
    </div>
  );
};

export default FilterBar;
