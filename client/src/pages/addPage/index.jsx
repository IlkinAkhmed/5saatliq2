import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet'

function Add() {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const [data, setData] = useState(null)


    function handleChange(value, setState) {
        setState(value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post('http://localhost:3400/products', {
            image: image,
            title: title,
            price: price,
            description: description
        })
    }

    async function fetchData() {
        const res = await axios.get('http://localhost:3400/products')
        setData(res.data)
    }

    async function removeData(id) {
        console.log(id)
        await axios.delete(`http://localhost:3400/products/${id}`)
        fetchData()
    }

    useEffect(() => {
        fetchData()
        removeData()
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Add</title>
            </Helmet>
            <div className='add'>
                <h1>Add Page</h1>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="">Image</label>
                    <input onChange={(e) => handleChange(e.target.value, setImage)} type="text" />
                    <label htmlFor="">Title</label>
                    <input onChange={(e) => handleChange(e.target.value, setTitle)} type="text" />
                    <label htmlFor="">Price</label>
                    <input onChange={(e) => handleChange(e.target.value, setPrice)} type="number" />
                    <label htmlFor="">Description</label>
                    <input onChange={(e) => handleChange(e.target.value, setDescription)} type="text" />
                    <input type="submit" />
                </form>
                {
                    data && data.map(item => (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>
                                        image
                                    </th>
                                    <th>title</th>
                                    <th>price</th>
                                    <th>description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width={220}>{item._id}</td>
                                    <td width={300}>{item.image}</td>
                                    <td width={70}>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td onClick={() => removeData(item._id)} style={{ textAlign: "center", cursor: "pointer" }} width={30}><i className='fa-solid fa-trash-can'></i></td>
                                </tr>
                            </tbody>
                        </table>

                    )

                    )
                }
            </div>
        </>
    )
}

export default Add