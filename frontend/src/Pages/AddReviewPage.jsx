import React, { useState, useEffect } from "react";
import RatingScale from "../Components/RatingScale";
import "./../styles/AddReviewPage.css";
const AddReviewPage = () => {
  return (
    <>
      <RatingScale />
      <div className="container">
        <h2>COMMENT</h2>
        <textarea
          name="comments"
          cols="100"
          rows="10"
          placeholder="Describe your experience working in this company"
        ></textarea>
      </div>
      <div className="container">
        <h2>Wishes</h2>
        <textarea
          name="comments"
          cols="100"
          rows="10"
          placeholder="What can the company improve on to build a more inclusive culture"
        ></textarea>
      </div>
      <div className="button-container">
        <button className="submit-button">submit</button>
      </div>
    </>
  );
};

export default AddReviewPage;
