function enableDarkMode(){
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
                        <a href="index.html" className="nav-link" aria-label="Home"><i className="fas fa-home"></i>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="events.html" className="nav-link" aria-label="Events"><i className="fas fa-swatchbook"></i>Events</a>
                    </li>
                    <li className="nav-item">
                        <a href="profile.html" className="nav-link" aria-label="Profile"><i className="fas fa-user"></i>Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="register.html" className="nav-link" aria-label="Register"><i className="fas fa-book-open"></i>Register</a>
                    </li>
                    <li className="nav-item">
                        <a href="login.html" className="nav-link" aria-label="Log in"><i className="fas fa-arrow-right"></i>Log in</a>
                    </li>
                    <li className="nav-item">
                        <label for="dark-mode-toggle" className="dark-mode-toggle">
                            <i className="fas fa-sun" aria-hidden="true"></i>
                            <input type="checkbox" id="dark-mode-toggle" onClick={()=>enableDarkMode()}
                                aria-label="Toggle Dark Mode"/>
                            <i className="fas fa-moon" aria-hidden="true"></i>
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