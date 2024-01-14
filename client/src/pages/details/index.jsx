import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'

function Details() {

    const { id } = useParams()
    const [item, setItem] = useState([])

    async function fetchData() {
        const res = await axios.get(`http://localhost:3400/products/${id}`)
        setItem(res.data)
    }
    useEffect(() => {
        fetchData()
    })
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | About</title>
            </Helmet>
            <div className='details'>
                <div className="head">
                    <h2>Details</h2>
                </div>
                <div className="det-card">
                    <div className="det-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="det-texts">
                        <h3>{item.title}</h3>
                        <p>${item.price}.00</p>
                        <p>{item.description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Details