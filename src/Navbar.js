function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg" id="nav">
                <div class="container-fluid">
                    <div class="dropdown" id="dropdown">
                        <a class="navbar-brand" href="index.html"><i class="fas fa-home"></i>Home</a>
                        <a class="navbar-brand" href="profile.html"><i class="fas fa-user"></i>Profile</a>
                        <a class="navbar-brand" href="events.html"><i class="fas fa-swatchbook"></i>Events</a>
                        <a class="navbar-brand" href="#"><i class="fas fa-book-open"></i>Register</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;