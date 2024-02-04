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
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-darker">Posted by: {username}</p>
                <p className="mt-4 text-gray-700 text-justify">{item.content}</p>
                <p className="text-xs text-gray-400 mt-4">Created at: {new Date(item.createdAt).toLocaleDateString()}</p>
            </div>
    );
};

export default WishlistCard;
