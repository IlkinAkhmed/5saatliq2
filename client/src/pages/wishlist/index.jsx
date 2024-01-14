import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/wishlistContext'
import { Helmet } from 'react-helmet'

function Wishlist() {
    const { wishlist, setWishlist } = useContext(WishlistContext)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Wishlist</title>
            </Helmet>
            <div className='wishlist'>
                <div className="head">
                    <h2>Wishlist</h2>
                </div>
                <div className="wrapper">
                    {wishlist && wishlist.map(item => (
                        <div className="card">
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="texts">
                                <h3>{item.title}</h3>
                                <p>${item.price}.00</p>
                                <i
                                    className='fa-solid fa-trash-can'
                                    onClick={() => setWishlist(wishlist.filter(x => x._id !== item._id))}
                                ></i>
                            </div>
                        </div>

                    ))

                    }

                </div>
            </div>
        </>
    )
}

export default Wishlist