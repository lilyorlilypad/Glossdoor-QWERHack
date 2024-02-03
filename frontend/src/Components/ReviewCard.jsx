// ReviewCard.js
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div key={review._id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold">{review.title}</h3>
            <p className="text-sm text-gray-500 mb-2">Reviewed by {review.userid} on {new Date(review.createdAt).toLocaleDateString()}</p>
            <p>{review.content}</p>
            <div className="flex justify-between items-center mt-4">
                <button className="mr-2">👍 {review.upvotes}</button>
                <button>👎 {review.downvotes}</button>
            </div>
        </div>
    );
};

export default ReviewCard;
