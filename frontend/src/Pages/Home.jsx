import React from "react";
import { Link } from "react-router-dom";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
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
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src="/home_bg.png" alt="Background" className="h-full w-full object-cover filter blur-lg" />
            </div>

            {/* Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="/Glossdoor.png" alt="Glossdoor" className="h-40" /> {/* Adjust the size as needed */}
            </div>
        </div>

      <SearchBarWithFilter />
    </div>
  );
};

export default Home;
