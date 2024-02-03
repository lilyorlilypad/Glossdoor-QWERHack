import React from 'react';
import { useEffect, useState } from 'react';
import apiConfig from "../apiConfig";
import ReviewCard from "./ReviewCard";




const ReviewsTab = ({ companyData }) => {
    const reviewIds = companyData.reviews; // Assuming 'reviews' is part of companyData
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            const fetchedReviews = await Promise.all(reviewIds.map(async (id) => {
                const url = apiConfig.baseUrl + apiConfig.reviews.getById(id)
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }));

            setReviews(fetchedReviews);
            setLoading(false);
        };

        if (reviewIds && reviewIds.length > 0) {
            fetchReviews().catch(error => console.error("Failed to fetch reviews:", error));
        } else {
            setLoading(false); // No review IDs to fetch
        }
    }, [reviewIds]);

    console.log(companyData)
    console.log(reviews)

    if (loading) {
        return <div>Loading reviews...</div>;
    }

    if (!reviews || reviews.length === 0) {
        return <div>No reviews available.</div>;
    }

    return (
        <div>
            {reviews.map((review) => (

                <ReviewCard key={review._id} review={review} />

            ))}
        </div>
    );
};

export default ReviewsTab;
