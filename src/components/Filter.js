function Filter() {
    return (
        <div className="container" id="events">
            <h1>Events</h1>

            <div className="row" id="filter">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <h3>Filter Events:</h3>
                </div>
                <div className="col-md-8">
                    <input type="text" id="eventFilter" placeholder="Filter the events list by writing the type of event" />
                </div>
                <div className="col-md-1"></div>
            </div>

            <div id="cardsEvents"></div>
        </div>
    )
};

export default Filter;