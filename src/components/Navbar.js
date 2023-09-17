import React from 'react';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" id="nav">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html" aria-label="Home"><i className="fas fa-home"></i> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="profile.html" aria-label="Profile"><i className="fas fa-user"></i> Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="events.html" aria-label="Events"><i className="fas fa-swatchbook"></i> Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" aria-label="Register"><i className="fas fa-book-open"></i> Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
