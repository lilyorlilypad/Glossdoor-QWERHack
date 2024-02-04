import React from "react";
import { Link } from "react-router-dom";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
import "./../styles/Home.css";


const Home = () => {
  return (
    <div >
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

      
      {/*  
      <div className="logo">
        <img src="/Glossdoor.png" alt="Glossdoor"></img>
      </div>

*/}
        <div className="home-page flex items-center justify-center">

            <div className="Background w-full h-full">
                <div className="relative justify-center flex items-center min-h-screen">
                    <img src="/home_bg.png" className={"absolute w-full h-full object-cover"}></img>

                    <div className="z-10 text-center">
                        <h1 className={"text-white text-6xl font-bold mb-14 mt-14"}>Glossdoor</h1>
                        <SearchBarWithFilter className="mt-10"/>
                    </div>
                </div>
            {/*<div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">*/}
            {/*    <h1 className={"text-white text-6xl font-bold"}>Glossdoor</h1>*/}
            {/*</div>*/}

            </div>
      </div>

      
    </div>
  );
};

export default Home;
