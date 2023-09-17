import React from 'react';

function Map() {
    return (
        <div>
            <h1>Events on Map</h1>

            <div className="row" id="map">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <img src="img/map.jpg" className="card-img-top" alt="Map of Events" />
                </div>
                <div className="col-md-3">
                    <a href="#" className="btn btn-primary" aria-label="Filter events">Filter by</a>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Map;
