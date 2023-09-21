function viewDetails(id) {
    alert("Este es el id:" + id);
}

function Event({ eventID, img, eventName, eventType, description,
    locationHtml, location, startingDate, finishingDate, startingTime, finishingTime }) {


    return (

        <div className="card mb-3">
            <div className="row">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start custom-img" alt="featured events" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{eventName} - {eventType}</h3>
                        <p className="card-text">{description}</p>
                        <a href={locationHtml} target="_blank" rel="noreferrer">{location}</a>
                        <p className="card-text"><small className="text-body-secondary">
                            Date: {startingDate} - {finishingDate} Hour: {startingTime} - {finishingTime}</small></p>
                        <button className="btn btn-primary" onClick={() => viewDetails(eventID)}>Details</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Event;