import React from 'react'
import "./index.scss"
import Header from '../../components/header'
import Mission from '../../components/mission'
import Products from '../../components/products'
import Pricing from '../../components/pricing'
import Team from '../../components/team'
import { Helmet } from 'react-helmet'

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Header />
            <Mission />
            <Products />
            <Pricing />
            <Team />
        </>
    )
}

export default Home