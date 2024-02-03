import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./Pages/Home";
import CompanyPage from "./Pages/CompanyPage"; // Adjust the path based on your file structure
import FilterResultPage from "./Pages/FilterResultPage";
import AddReviewPage from "./Pages/AddReviewPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:companyId" element={<CompanyPage />} />
          <Route path="/FilterResultPage" element={<FilterResultPage />} />
          <Route path="/AddReviewPage" element={<AddReviewPage />} />
          {/* other routes */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
