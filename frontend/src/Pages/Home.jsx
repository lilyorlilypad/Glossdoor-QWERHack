import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./../Components/SearchBar";
import FilterBar from "./../Components/FilterBar";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home!</h1>
      <Link to="/company" className="text-blue-500 hover:text-blue-800">
        Company Page
      </Link>
      <Link
        to="/FilterResultPage"
        className="text-blue-500 hover:text-blue-800"
      >
        FilterResult Page
      </Link>
      <SearchBar />
      <FilterBar />
    </div>
  );
};

export default Home;
