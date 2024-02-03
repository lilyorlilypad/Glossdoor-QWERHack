// WishlistCard.js
import React, { useState, useEffect } from 'react';
import apiConfig from "../apiConfig";

const WishlistCard = ({ item }) => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const apiGetUserByIdUrl = apiConfig.baseUrl + apiConfig.users.getById(item.userId);
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
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <p className="text-sm text-gray-500">Posted by: {username}</p>
            <p className="mt-2">{item.content}</p>
            <p className="text-sm text-gray-500 mt-4">Created at: {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default WishlistCard;
