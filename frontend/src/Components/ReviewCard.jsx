// ReviewCard.js
import React, {useEffect, useState} from 'react';
import apiConfig from "../apiConfig";
import {metricDisplayNames} from "../utils/metricNames";

const ReviewCard = ({ review }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const apiGetUserByIdUrl = apiConfig.baseUrl + apiConfig.users.getById(review.userId);
                const response = await fetch(apiGetUserByIdUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await response.json();
                setUsername(userData.username); // Assuming the response contains a username field
            } catch (error) {
                console.error("Error fetching user's username:", error);
                setUsername('Unknown User'); // Fallback username
            }
        }
        fetchUsername();
    }, []);

    return (
        <div key={review._id} className="bg-white p-4 rounded-lg shadow mb-4">

            <h3 className="text-lg font-semibold">{review.title}</h3>

            <p className="text-sm text-gray-500 mb-2">Reviewed by {username} on {new Date(review.createdAt).toLocaleDateString()}</p>

            {/* Render the scores for each metric */}
            <div className="flex items-center justify-between">
                <div className="text-xs flex space-x-2">
                    {review.score && Object.entries(review.score).map(([metricName, score]) => (
                        <span key={metricName} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            {metricDisplayNames[metricName] || metricName}: {score.toFixed(1)}
                        </span>
                    ))}
                </div>
            </div>

            {/* Body text */}

            <p>{review.content}</p>
            <div className="flex justify-between items-center mt-4">
                <button className="mr-2">👍 {Math.round(review.upvotes)}</button>
                <button>👎 {Math.round(review.downvotes)}</button>
            </div>
        </div>
    );
};

export default ReviewCard;
