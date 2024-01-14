import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [])
    localStorage.setItem('wishlist', JSON.stringify(wishlist))


    function addToWishlist(item) {
        const findedData = wishlist.find(x => x._id === item._id)
        if (findedData) {
            console.log(findedData)
            setWishlist(wishlist.filter(x => x._d !== findedData._id))
        } else {
            setWishlist([...wishlist, item])
        }
    }


    const data = {
        wishlist,
        setWishlist,
        addToWishlist
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}