import Events from '../components/Events.js';

function getEvents() {

    const events = [
        {
            "eventID": 1,
            "eventName": "Graffiti",
            "eventType": "Arte Urbano",
            "description": "TV Boy realizará un mural en defensa de los ataques homófobos ocurridos en el mes de Junio",
            "img": "./img/Graffitti.jpeg",
            "location": "Carrer Sant Pere més Baix, 70, 08003, Barcelona",
            "locationHtml": "https://goo.gl/maps/BeF9NBvyn8jmjHvM7",
            "startingDate": "12/08/2023",
            "finishingDate": "12/08/2023",
            "startingTime": "19:00",
            "finishingTime": "22:00"
        },
        {
            "eventID": 2,
            "eventName": "Exposició Parc Ciutadella",
            "eventType": "Cultural",
            "description": "Exposición de obras de diferentes artistas vinculadas al constante cambio de la cultura",
            "img": "./img/Exposicio.jpg",
            "location": "Passeig de Picasso, 21, 08003, Barcelona",
            "locationHtml": "https://goo.gl/maps/rqxjMRnSX2uufEFG8",
            "startingDate": "10/08/2023",
            "finishingDate": "13/08/2023",
            "startingTime": "10:00",
            "finishingTime": "20:00"
        },
    ]
    return events;
}

function EventList() {
    const evnts = getEvents();

    return (
        <>
            {
                evnts.map((item) => {
                    return <Events eventID={item.eventID} eventName={item.eventName}
                        eventType={item.eventType} description={item.description}
                        img={item.img} location={item.location} locationHtml={item.locationHtml}
                        startingDate={item.startingDate} finishingDate={item.finishingDate}
                        startingTime={item.startingTime} finishingTime={item.finishingTime} />
                })
            }
        </>
    )
}

export default EventList;