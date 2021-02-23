import React from 'react'

export default function nav() {
    return (
        <div>
             <nav className="navigation">
          <h3 className="brand-logo">Swifty</h3>
          <ul className="list-items">
            <li className="list-item"><a className="list-link" href="/">Home</a></li>
            <li className="list-item"><a className="list-link" href="/">About</a></li>
            <li className="list-item"><a className="list-link" href="/">Section</a></li>
            <li className="list-item"><a className="list-link" href="/">Contact Us</a></li>
          </ul>
        </nav>
        </div>
    )
}
