import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./../Components/SearchBar";
import FilterBar from "./../Components/FilterBar";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home!</h1>
      <Link to="/AllCompaniesPage" className="text-blue-500 hover:text-blue-800">
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
        <img src="/Glossdoor.png"></img>
      </div>

      <SearchBar />
      <FilterBar />
    </div>
  );
};

export default Home;
