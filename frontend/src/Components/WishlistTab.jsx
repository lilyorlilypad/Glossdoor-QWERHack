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
                const response = await fetch(apiGetWishlistByCompanyIdUrl); // Assume this function is implemented and fetches the data
                const wishlist = await response.json();
                console.log(apiGetWishlistByCompanyIdUrl)
                console.log(wishlist)
                setWishlistItems(wishlist);
            } catch (error) {
                const wishlist = [mockWishlistItems]
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
