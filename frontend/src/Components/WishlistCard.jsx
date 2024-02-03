// WishlistCard.js
import React from 'react';

const WishlistCard = ({ item }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <p className="text-sm text-gray-500">User ID: {item.userId}</p>
            <p className="mt-2">{item.content}</p>
            <p className="text-sm text-gray-500 mt-4">Created at: {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default WishlistCard;
