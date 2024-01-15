import React from 'react';
import Logo from '../asset/Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <img className='logo' src={Logo} alt='logo' />
                <div className='search-bar'>
                    <div className='input d-flex ms-4 '>
                        <input className="form-control border-secondary search-box" style={{ width: "18rem" }} type="search" placeholder="search" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary search-icon" type="button">
                                <i className="bi bi-search "></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown me-4">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-compass-fill me-2 nav-icon"></i> Explore
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">People - Community</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Products - Store</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Blogs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-4">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-star-fill me-2 nav-icon"></i>Hobbies
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">People - Community</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Products - Store</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Blogs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item me-4">
                            <i className="bi bi-bookmark-fill nav-icon"></i>
                        </li>
                        <li className="nav-item me-4 bell-icon">
                            <i className="bi bi-bell-fill nav-icon"></i>
                        </li>

                        <li className="nav-item me-4">
                            <i className="bi bi-cart-fill nav-icon"></i>
                        </li>
                        <button type="button" class="btn btn-outline-secondary login-btn ">Sign in</button>
                    </ul>
                </div>

                <div className='d-flex'>

                    <button className='btn mob-search'>
                        <i className="bi bi-search "></i>
                    </button>
                    <button className='btn bell-icon2'>
                            <i className="bi bi-bell-fill nav-icon "></i>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
