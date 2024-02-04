import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./../Components/SearchBar";
import FilterBar from "./../Components/FilterBar";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Link
        to="/AllCompaniesPage"
        className="text-blue-500 hover:text-blue-800"
      >
        Companies
      </Link>
      <Link
        to="/FilterResultPage"
        className="text-blue-500 hover:text-blue-800"
      >
        FilterResult Page
      </Link>
      <Link to="/AddReviewPage" className="text-blue-500 hover:text-blue-800">
        AddReview Page
      </Link>
      <div className="logo">
        <img src="/Glossdoor.png" alt="Glossdoor"></img>
      </div>

      <div className="Background">
      <img src="/home_bg.png"></img>
            </div>

      <SearchBar />
      <FilterBar />
    </div>
  );
};

export default Home;
