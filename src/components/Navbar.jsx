import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="account">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img className="rounded" src={logo} alt="" width="45" height="45" />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}


