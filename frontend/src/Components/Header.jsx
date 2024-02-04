import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-6 py-4 bg-white shadow-md">
      <a
        href="/"
        className="text-xl font-bold text-gray-800 hover:text-gray-600"
      >
        Home
      </a>
      <div className="flex space-x-4">
        <a
          href="/AllCompaniesPage"
          className="text-lg text-gray-800 hover:text-gray-600"
        >
          All Companies
        </a>
        <a
          style={{ cursor: "pointer" }}
          className="text-lg text-gray-800 hover:text-gray-600"
        >
          My Profile
        </a>
      </div>
    </div>
  );
};

export default Header;
