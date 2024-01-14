import React from 'react'
import "./index.scss"

function Pricing() {
    return (
        <section className='pricing'>
            <div className="head">
                <p>Devoted to wonderful beauty</p>
                <h2>Events Pricing</h2>
            </div>
            <div className="pricing-wrapper">
                <div className="cards">
                    <p>$16 <span>per table</span></p>
                    <p>Birthday Events</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas nulla suscipit!</p>
                    <button>Shop now</button>
                </div>
                <div className="cards">
                    <p>$31 <span>per table</span></p>
                    <p>Birthday Events</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas nulla suscipit!</p>
                    <button>Shop now</button>
                </div>
                <div className="cards">
                    <p>$52 <span>per table</span></p>
                    <p>Birthday Events</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas nulla suscipit!</p>
                    <button>Shop now</button>
                </div>
            </div>
        </section>
    )
}

export default Pricing