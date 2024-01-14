import React from 'react'
import "./index.scss"

function Team() {
    return (
        <section className='team'>
            <div className="head">
                <p>Contacts</p>
                <h2>Our Team</h2>
            </div>
            <div className="team-wrapper">
                <div className="card">
                    <div className="img">
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                        <div className="team-icons">
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-instagram'></i>
                        </div>
                    </div>
                    <div className="texts">
                        <p>Velva kopf</p>
                        <span>Bologist</span>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                        <div className="team-icons">
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-instagram'></i>
                        </div>
                    </div>
                    <div className="texts">
                        <p>Sarah Palmer</p>
                        <span>Florist</span>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                        <div className="team-icons">
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-instagram'></i>
                        </div>
                    </div>
                    <div className="texts">
                        <p>Jessica Swift</p>
                        <span>Photographer</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Team