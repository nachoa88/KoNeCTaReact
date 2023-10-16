import { NavLink } from "react-router-dom";

function enableDarkMode() {
    let mainBody = document.body;
    mainBody.classList.toggle("light-mode")
}

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-label="Home"><i className="fas fa-home"></i>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/events" className="nav-link" aria-label="Events"><i className="fas fa-swatchbook"></i>Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/createevent" className="nav-link" aria-label="Submit an event"><i className="fas fa-swatchbook"></i>Create event</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/updateevent" className="nav-link" aria-label="Update an event"><i className="fas fa-swatchbook"></i>Update event</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/profile" className="nav-link" aria-label="Profile"><i className="fas fa-user"></i>Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link" aria-label="Register"><i className="fas fa-book-open"></i>Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" aria-label="Log in"><i className="fas fa-arrow-right"></i>Log In</NavLink>
                            </li>
                            <li className="nav-item">
                                <label for="dark-mode-toggle" className="dark-mode-toggle">
                                    <i className="fas fa-moon" aria-hidden="true"></i>
                                    <input type="checkbox" id="dark-mode-toggle" onClick={() => enableDarkMode()}
                                        aria-label="Toggle Dark Mode" />
                                    <i className="fas fa-sun" aria-hidden="true"></i>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;