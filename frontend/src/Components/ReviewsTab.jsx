import React from 'react';
import { useEffect, useState } from 'react';
import apiConfig from "../apiConfig";




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
                <div key={review._id} className="bg-white p-4 rounded-lg shadow mb-4">
                    <h3 className="text-lg font-semibold">{review.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">Reviewed by {review.userid} on {new Date(review.createdAt).toLocaleDateString()}</p>
                    <p>{review.content}</p>
                    <div className="flex justify-between items-center mt-4">
                        <button className="mr-2">👍 {review.upvotes}</button>
                        <button>👎 {review.downvotes}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewsTab;
