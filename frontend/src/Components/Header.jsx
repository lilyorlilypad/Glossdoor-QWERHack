import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          {/* Other navigation links */}
          <li>
            <a href="/AllCompaniesPage">All Companies</a>
          </li>
          <li>
            <a href="/LogIn">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
