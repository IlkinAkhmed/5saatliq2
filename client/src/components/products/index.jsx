import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { WishlistContext } from '../../context/wishlistContext'
import { useNavigate } from 'react-router'

function Products() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')

    const { wishlist, addToWishlist } = useContext(WishlistContext)

    const navigate = useNavigate()


    async function fetchData() {
        const res = await axios.get('http://localhost:3400/products')
        setData(res.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSort = () => {
        setData(
            [...data].sort((a, b) =>
                a.price > b.price ? 1 : b.price > a.price ? -1 : 0
            )
        );
    };


    return (
        <section className='products'>
            <div className="head">
                <p>Devoted to wonderful beauty</p>
                <h2>Flowers Pricing</h2>
                <button onClick={handleSort}>filter by price</button>
                <input placeholder='search by name' onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" />
            </div>
            <div className="wrapper">
                {isLoading ? <h1>IsLoading...</h1>
                    :
                    (data && data
                        .filter(item => item.title.toLowerCase().trim().includes(search.trim().toLowerCase()))
                        .map(item => (
                            <div className="card">
                                <div className="img">
                                    <img src={item.image} alt="" />
                                    <div className="card-icons">
                                        <i onClick={() => addToWishlist(item)} className='fa-regular fa-heart'></i>
                                        <i onClick={() => navigate(`details/${item._id}`)} className='fa-solid fa-search'></i>
                                    </div>
                                </div>
                                <div className="texts">
                                    <h3>{item.title}</h3>
                                    <p>${item.price}.00</p>
                                </div>
                            </div>

                        ))

                    )}

            </div>
        </section>
    )
}

export default Products