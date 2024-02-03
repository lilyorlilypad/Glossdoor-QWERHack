// WishlistTab.js
import React, { useEffect, useState } from 'react';
import WishlistCard from './WishlistCard'; // Make sure to create this component
import apiConfig from "../apiConfig";

const mockWishlistItems = {
    _id: 1,
    companyId: "65bddd9566d1fbede49b39a2",
    content: "hello world",
    createdAt: "2021-08-01T00:00:00.000Z",
}

const WishlistTab = ({ companyId }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                setLoading(true);
                const apiGetWishlistByCompanyIdUrl = apiConfig.baseUrl + apiConfig.wishlists.getByCompanyId(companyId);
                fetch(apiGetWishlistByCompanyIdUrl)
                    .then(response => {
                        if (!response.ok) {
                            // If the server responds with a 404, use mock data
                            if (response.status === 404) {
                                throw new Error('Company catalog not found, using mock data');
                            }
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setWishlistItems(data);
                    })
                    .catch(error => {
                        console.error(error.message);
                        // Set to mock data in case of error or if no data found
                        setWishlistItems([]); // Ensure mockCompanyData is defined
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

        fetchWishlist();
    }, [companyId]);

    if (loading) return <div>Loading wishlist...</div>;
    if (wishlistItems.length === 0) return <div>No wishlist items found.</div>;

    return (
        <div>
            <h2 className="text-xl font-bold">Wishlist</h2>
            <p className="mb-4">Here are the wishlist items associated with this company:</p>
            {wishlistItems.map((item) => (
                <WishlistCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default WishlistTab;
