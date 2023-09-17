import React from 'react';

function Home() {
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <div className="card" id="events">
                    <img src="./img/rock.jpg" className="card-img-top" alt="Featured Events" />
                    <div className="card-body">
                        <h3 className="card-title">Featured Events</h3>
                        <p className="card-text">These are our featured events. We offer a full list of underground events for you and
                            your friends, where you can filter by type & date. </p>
                        <a href="events.html" className="btn btn-primary" aria-label="Go to Events">Go to Events</a>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="card" id="profile">
                    <img src="./img/profile.jpg" className="card-img-top" alt="User Profile" />
                    <div className="card-body">
                        <h3 className="card-title">Do you have a profile?</h3>
                        <p className="card-text">If you don't have a profile, you can register with just a few steps and enjoy the
                            advantages of being a user.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <a href="login.html" className="btn btn-primary" aria-label="Log in">Log in</a>
                            </div>
                            <div className="col-md-6">
                                <a href="..." className="btn btn-primary" aria-label="Register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}

export default Home;
