function HomeCards() {
    return (
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <div class="card" id="events">
                    <img src="./img/rock.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">Featured Events</h3>
                        <p class="card-text">This are our featured events. We offer a full list of underground events for you and
                            and your friends, where you can filter by type & date. </p>
                        <a href="events.html" class="btn btn-primary">Go to Events</a>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card" id="profile">
                    <img src="./img/profile.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">Do you have a profile?</h3>
                        <p class="card-text">If you don't have a profile, you can register just with a few steps and enjoy the
                            advantages of being user.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="login.html" class="btn btn-primary">Log in</a>
                            </div>
                            <div class="col-md-6">
                                <a href="..." class="btn btn-primary">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    )
}

export default HomeCards;