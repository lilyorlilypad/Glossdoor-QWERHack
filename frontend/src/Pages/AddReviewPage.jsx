import React from "react";
import RatingScale from "../Components/RatingScale";
import "./../styles/AddReviewPage.css";
const AddReviewPage = () => {
  return (
    <>
      <RatingScale />

      <div className="review-container bg-white p-6 rounded-lg shadow-md my-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">COMMENT</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          name="comments"
          cols={100}
          rows={10}
          placeholder="Describe your experience working in this company"
        ></textarea>
      </div>

      <div className="review-container bg-white p-6 rounded-lg shadow-md my-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">WISHES</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          name="wishes"
          cols={100}
          rows={10}
          placeholder="What can the company improve on to build a more inclusive culture"
        ></textarea>
      </div>

      <div className="button-container">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Submit
        </button>
      </div>
    </>
  );
};

export default AddReviewPage;
