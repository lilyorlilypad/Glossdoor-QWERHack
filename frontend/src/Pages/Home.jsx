import React from "react";
import { Link } from "react-router-dom";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home!</h1>
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
        <img src="/Glossdoor.png"></img>
      </div>

      <SearchBarWithFilter />
    </div>
  );
};

export default Home;
