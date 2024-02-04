// ReviewCard.js
import React, { useEffect, useState } from "react";
import apiConfig from "../apiConfig";
import { metricDisplayNames } from "../utils/metricNames";

const ReviewCard = ({ review }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const apiGetUserByIdUrl =
          apiConfig.baseUrl + apiConfig.users.getById(review.userId);
        const response = await fetch(apiGetUserByIdUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUsername(userData.username); // Assuming the response contains a username field
      } catch (error) {
        console.error("Error fetching user's username:", error);
        setUsername("Unknown User"); // Fallback username
      }
    };
    fetchUsername();
  }, [review.userId]);
  const averageScore = review.score
    ? Object.values(review.score).reduce((total, score) => total + score, 0) /
      Object.values(review.score).length
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-3 h-full overflow-hidden">
      <div className="flex justify-end">
        <div className="flex flex-col pr-6">
          <div className="text-4xl font-bold">{averageScore.toFixed(1)}</div>
          <div className="text-xs text-gray-500">
            <p>{username}</p>
            <p>{new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-1">{review.title}</h3>
          <p className="text-gray-600">{review.content}</p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="">
          <span className="text-gray-600 mr-1">Tags:</span>
          {review.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary text-dark rounded-full px-3 py-1 text-sm font-semibold mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center justify-center bg-primary text-white rounded-full h-10 w-10">
            <p>👍</p>
            <p className="text-xs">{Math.round(review.upvotes)}</p>
          </button>
          <button className="flex items-center justify-center bg-primary text-white rounded-full h-10 w-10">
            <p>👎</p>
            <p className="text-xs">{Math.round(review.upvotes)}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
