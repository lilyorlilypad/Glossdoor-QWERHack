import React from "react";
import { Link } from "react-router-dom";
import SearchBarWithFilter from "../Components/SearchBarWithFilter";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-page flex items-center justify-center">
        <div className="Background w-full h-full">
          <div className="relative justify-center flex items-center min-h-screen">
            <img
              src="/home_bg.png"
              className={"absolute w-full h-full object-cover"}
            ></img>

            <div className="z-10 text-center">
              <h1 className={"text-white text-6xl font-bold mb-14 mt-14"}>
                Glossdoor
              </h1>
              <SearchBarWithFilter className="home-search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
