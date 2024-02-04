import React, { useState } from "react";
import FilterBar, { RATING_SETTINGS } from "./FilterBar";
import SearchBar from "./SearchBar";

const SearchBarWithFilter = () => {
  const [filterSetting, setFilterSetting] = useState(RATING_SETTINGS.NONE);

  return (
    <>
      <SearchBar filterSetting={filterSetting} />
      <FilterBar filterSetting={filterSetting} setFilterSetting={setFilterSetting} />
    </>
  );
}

export default SearchBarWithFilter;
