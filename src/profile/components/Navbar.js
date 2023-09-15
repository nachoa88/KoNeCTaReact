import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <div className="container-fluid">
        <div className="dropdown" id="dropdown">
          <a className="navbar-brand" href="index.html"><i className="fas fa-home"></i>Home</a>
          <a className="navbar-brand" href="profile.html"><i className="fas fa-user"></i>Profile</a>
          <a className="navbar-brand" href="events.html"><i className="fas fa-swatchbook"></i>Events</a>
          <a className="navbar-brand" href="#"><i className="fas fa-book-open"></i>Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
