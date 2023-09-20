function Filter() {
    return (
        <div class="container" id="events">
            <h1>Events</h1>

            <div class="row" id="filter">
                <div class="col-md-1"></div>
                <div class="col-md-3">
                    <h4>Filter Events:</h4>
                </div>
                <div class="col-md-8">
                    <input type="text" id="eventFilter" placeholder="Filter the events list by writing the type of event" />
                </div>
                <div class="col-md-1"></div>
            </div>

            <div id="cardsEvents"></div>
        </div>
    )
};

export default Filter;