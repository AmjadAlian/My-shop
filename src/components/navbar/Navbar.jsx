import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">

                <div className="container">
                    <a className="navbar-brand" href="#">My Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            <li className="nav-item">

                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/restaurant'>Restaurant</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}