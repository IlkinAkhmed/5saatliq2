import React from 'react'
import "./index.scss"
import { Helmet } from "react-helmet"

function About() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | About</title>
            </Helmet>
            <div>About</div>
        </>
    )
}

export default About