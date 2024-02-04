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
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold text-dark mb-2">{review.title}</h3>
            <p className="text-sm text-darker mb-2">Reviewed by {username} on {new Date(review.createdAt).toLocaleDateString()}</p>
            <div className="flex items-center justify-between mb-2">
                {/* Metric scores */}
                <div className="text-xs flex space-x-2">
                    {review.score && Object.entries(review.score).map(([metricName, score]) => (
                        <span key={metricName} className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-dark mr-2">
          {metricDisplayNames[metricName] || metricName}: {score.toFixed(1)}
        </span>
                    ))}
                </div>
            </div>
            <p className="text-darker">{review.content}</p>
            <div className="flex justify-between items-center mt-4">
                <button className="text-secondary">👍 {Math.round(review.upvotes)}</button>
                <button className="text-darker">👎 {Math.round(review.downvotes)}</button>
            </div>
        </div>
    );
};

export default ReviewCard;
