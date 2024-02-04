import React from "react";
import { useEffect, useState } from "react";
import apiConfig from "../apiConfig";
import ReviewCard from "./ReviewCard";

const ReviewsTab = ({ companyData }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const apiGetReviewsByCompanyIdUrl =
          apiConfig.baseUrl + apiConfig.reviews.getByCompanyId(companyData._id);
        fetch(apiGetReviewsByCompanyIdUrl)
          .then((response) => {
            if (!response.ok) {
              // If the server responds with a 404, use mock data
              if (response.status === 404) {
                throw new Error("Company catalog not found, using mock data");
              }
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setReviews(data);
          })
          .catch((error) => {
            console.error(error.message);
            // Set to mock data in case of error or if no data found
            setReviews([]); // Ensure mockCompanyData is defined
          });
        // console.log(apiGetWishlistByCompanyIdUrl)
        // console.log(wishlistItems)
      } catch (error) {
        // setWishlistItems([mockWishlistItems])
        console.error("Error fetching wishlist items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [companyData._id]);

  console.log(reviews);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  return (
    <div>
      {loading ? (
        <div className="text-center text-darker">Loading reviews...</div>
      ) : reviews.length === 0 ? (
        <div className="text-center text-darker">No reviews available.</div>
      ) : (
        <div className="space-y-8">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ReviewsTab;
