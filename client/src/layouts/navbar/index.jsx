import React, { useContext, useState } from 'react'
import "./index.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { WishlistContext } from '../../context/wishlistContext'

function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const navigate = useNavigate()
    const { wishlist } = useContext(WishlistContext)


    return (
        <>
            <nav>
                <div className="nav-inner">
                    <div className="logo">
                        <h1>Floral Studio</h1>
                    </div>
                    <ul className="nav-texts">
                        <li>
                            <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} className={'nav-link'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/portfolio'} className={'nav-link'}>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/add'} className={'nav-link'}>AddPage</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} className={'nav-link'}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="icons">
                        <i onClick={() => navigate('/wishlist')} className='fa-regular fa-heart'>
                            <p>{wishlist.length}</p>
                        </i>
                        <i onClick={() => setIsNavOpen(!isNavOpen)} className={`fa-solid ${isNavOpen ? 'fa-xmark' : "fa-bars"}`}></i>
                    </div>
                </div>
                <div className={`mobile-nav ${isNavOpen ? 'mobile-nav-open' : ''}`}>
                    <ul className="mobile-nav-texts">
                        <li>
                            <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to={'/'} className={'mobile-nav-link'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to={'/about'} className={'mobile-nav-link'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to={'/portfolio'} className={'mobile-nav-link'}>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to={'/add'} className={'mobile-nav-link'}>AddPage</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to={'/contact'} className={'mobile-nav-link'}>Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar