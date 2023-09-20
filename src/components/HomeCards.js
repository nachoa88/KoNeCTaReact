import { NavLink } from "react-router-dom";

function HomeCards() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-6">
                <div className="card" id="events">
                    <img src="img/rock.jpg" className="card-img-top img-fluid" alt="imagen de un festival de rock" id="img" />
                    <div className="card-body">
                        <h3 className="card-title">Featured Events</h3>
                        <p className="card-text">This are our featured events. We offer a full list of underground events for
                            you and and your friends, where you can filter by type & date. </p>
                        <NavLink to="/events" className="btn btn-primary">Go to Events</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card" id="profile">
                    <img src="img/Avatar.png" className="card-img-top" alt="avatar de un usuario" id="img" />
                    <div className="card-body">
                        <h3 className="card-title">Do you have a profile?</h3>
                        <p className="card-text">If you don't have a profile, you can register just with a few steps and enjoy
                            the advantages of being user.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <NavLink to="/login" className="btn btn-primary">Log in</NavLink>
                            </div>
                            <div className="col-md-6">
                                <NavLink to="/register" className="btn btn-primary">Register</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCards;