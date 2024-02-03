import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./Pages/Home";
import CompanyPage from "./Pages/CompanyPage"; // Adjust the path based on your file structure
import FilterResultPage from "./Pages/FilterResultPage";
import SearchBar from "./Components/SearchBar";
import FilterBar from "./Components/FilterBar";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:companyId" element={<CompanyPage />} />
          <Route path="/FilterResultPage" element={<FilterResultPage />} />
          {/* other routes */}
        </Routes>
      </Router>
      <SearchBar />
      <FilterBar />
    </>
  );
};

export default App;
