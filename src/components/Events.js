function Events({img, eventName, eventType, description, locationHtml, location, startingDate, finishingDate, startingTime, finishingTime}) {
    return (
        <div class="row">        
            <div class="col-md-4">
                <img src={img} class="img-fluid rounded-start custom-img" alt="photo event"/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">{eventName} - {eventType}</h3>
                    <p class="card-text">{description}</p>
                    <a href={locationHtml} target="_blank">{location}</a>
                    <p class="card-text"><small class="text-body-secondary">Date: {startingDate} - {finishingDate} Hour: {startingTime} - {finishingTime}</small></p>
                    <a href='#' class="btn btn-primary" onclick="details(${event.eventID})">Details</a>
                </div>
            </div>
        </div>
    )
}

export default Events;